import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Education } from '../models/education.model';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class EducationService {
  educationList: Education[];
  educationSubject = new Subject<Education[]>();
  constructor() {
    this.getEducations();
  }

  emitEducations() {
    this.educationSubject.next(this.educationList.slice());
  }
  saveEducations() {
    firebase.database().ref('/educationList').set(this.educationList);
  }
  getEducations() {
    firebase.database().ref('/educationList')
    .on('value',(data: DataSnapshot) => {
      this.educationList = data.val() ? data.val() : [];
      this.emitEducations();
    });
  }

  getSingleEducation(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/educationList/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  createNewEducation(newEducation: Education) {
    this.educationList.push(newEducation);
    this.saveEducations();
    this.emitEducations();
  }
  removeEducation(education: Education) {
    const educationIndexToRemove = this.educationList.findIndex(
      (educationEl) => {
        if(educationEl === education) {
          return true;
        }
      }
    );
    this.educationList.splice(educationIndexToRemove, 1);
    this.saveEducations();
    this.emitEducations();
  }
}
