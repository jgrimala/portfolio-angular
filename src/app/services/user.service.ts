import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class UserService {
    userList: User[];
  userId: string;
  userSubject = new Subject<User[]>(); //obeservable
  user: User;
  constructor() {
    this.getUsers();
  }
  emitUsers() {
      this.userSubject.next(this.userList.slice());
  }

  saveUsers() {
    firebase.database().ref('/userList').set(this.userList);
  }
  
  getUsers() {
    firebase.database().ref('/userList')
    .on('value',(data) => {
      this.userList = data.val() ? data.val() : [];
      this.emitUsers();
    })
  }
  

  getSingleUser(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/userList/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewUser(newUser: User) {
      this.userList.push(newUser);
      this.saveUsers();
      this.emitUsers();
  }

 
  removeUser(user: User) {
    const userIndexToRemove = this.userList.findIndex(
      (userEl) => {
        if(userEl === user) {
          return true;
        }
      }
    );
    this.userList.splice(userIndexToRemove, 1);
    this.saveUsers();
    this.emitUsers();
  }
}