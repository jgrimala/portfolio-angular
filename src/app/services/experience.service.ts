import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Experience } from '../models/experience.model';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class ExperienceService {

  experiencesList: Experience[];
  experienceSubject = new Subject<Experience[]>();
  constructor() {
    this.getExperiences();
  }

  emitExperiences() {
    this.experienceSubject.next(this.experiencesList);
  }
  saveExperiences() {
    firebase.database().ref('/experienceList').set(this.experiencesList);
  }
  getExperiences() {
    firebase.database().ref('/experienceList')
    .on('value',(data: DataSnapshot) => {
      this.experiencesList = data.val() ? data.val() : [];
      this.emitExperiences();
    });
  }

  getSingleExperience(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/experienceList/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
            
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  createNewExperience(newExperience: Experience) {
    this.experiencesList.push(newExperience);
    this.saveExperiences();
    this.emitExperiences();
  }
  removeExperience(experience: Experience) {
    const experienceIndexToRemove = this.experiencesList.findIndex(
      (experienceEl) => {
        if(experienceEl === experience) {
          return true;
        }
      }
    );
    this.experiencesList.splice(experienceIndexToRemove, 1);
    this.saveExperiences();
    this.emitExperiences();
  }
}
