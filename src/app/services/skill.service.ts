import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Skill } from '../models/skill.model';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class SkillService {

  skillList: Skill[];
  skillSubject = new Subject<Skill[]>();
  constructor() {
    this.getSkills();
  }

  emitSkills() {
    this
    .skillSubject.next(this.skillList);
  }
  saveSkills() {
    firebase.database().ref('/skillList').set(this.skillList);
  }
  getSkills() {
    firebase.database().ref('/skillList')
    .on('value',(data) => {
      this.skillList = data.val() ? data.val() : [];
      this.emitSkills();
    });
  }

  getSingleSkill(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/skillList/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  createNewSkill(newSkill: Skill) {
    this.skillList.push(newSkill);
    this.saveSkills();
    this.emitSkills();
  }
  removeSkill(skill: Skill) {
    const skillIndexToRemove = this.skillList.findIndex(
      (skillEl) => {
        if(skillEl === skill) {
          return true;
        }
      }
    );
    this.skillList.splice(skillIndexToRemove, 1);
    this.saveSkills();
    this.emitSkills();
  }
}

