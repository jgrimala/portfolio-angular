import { Component, OnInit } from '@angular/core';
import { animationMain } from '../animations/animationMain';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [animationMain],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
