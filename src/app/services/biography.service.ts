import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Biography } from '../models/biography.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class BiographyService {
  biographyList: Biography[];
  biographyId: string;
  biographySubject = new Subject<Biography[]>(); //obeservable
  biography: Biography;
  constructor() {
    this.getBiographyList();
  }
  emitBiographyList() {
      this.biographySubject.next(this.biographyList.slice());
  }

  saveBiographyList() {
    firebase.database().ref('/biographyList').set(this.biographyList);
  }
  
  getBiographyList() {
    firebase.database().ref('/biographyList')
    .on('value',(data) => {
      this.biographyList = data.val() ? data.val() : [];
      this.emitBiographyList();
    })
  }
  

  getSingleBiography(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/biographyList/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBiography(newBiography: Biography) {
      this.biographyList.push(newBiography);
      this.saveBiographyList();
      this.emitBiographyList();
  }

  removeBiography(biography: Biography) {
    const biographyIndexToRemove = this.biographyList.findIndex(
      (biographyEl) => {
        if(biographyEl === biography) {
          return true;
        }
      }
    );
    this.biographyList.splice(biographyIndexToRemove, 1);
    this.saveBiographyList();
    this.emitBiographyList();
  }
}
