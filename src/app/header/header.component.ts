import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  isAuth: boolean; // for authentification access control
  constructor(private authService: AuthService) {}
  ngOnInit() { // will allow to show the appropriate links in nav    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }
  onLogout() { // is a (click) event from html form
    this.authService.logoutUser();
  }
}
