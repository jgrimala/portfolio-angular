import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs'; 
import{ animationMain } from './animations/animationMain';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animationMain]
})
export class AppComponent {
  title = 'portfolioApp';
  
/* General animation when module change */
  constructor() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAQG778uKuIpp9KoukRNxoj5Q9CC6UnGPo",
    authDomain: "portfoliogrimala.firebaseapp.com",
    databaseURL: "https://portfoliogrimala.firebaseio.com",
    projectId: "portfoliogrimala",
    storageBucket: "portfoliogrimala.appspot.com",
    messagingSenderId: "460586665709",
    appId: "1:460586665709:web:a21c702f7d0a568d66eee4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  /*prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRoute;
   }*/
   prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
