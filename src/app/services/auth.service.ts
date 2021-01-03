import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // 3 methods here (register/login/logout)
  // Creation of new user with firebase
  createNewUser(email: string, password: string) {
    return new Promise( //asynchrone donc Promise
      (resolve, reject) => { // auth() is a firebase method
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  // Login of user with firebase
  loginUser(email: string, password: string) {
    return new Promise( //asynchrone donc Promise
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  // Logout of user with firebase
  logoutUser() { // No need for Promise here
    firebase.auth().signOut();
  }
  getUserEmail() {
    return firebase.auth().currentUser.email;
  }
}
