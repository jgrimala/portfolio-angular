import { Component, OnInit, AfterContentInit } from '@angular/core'; //, AfterViewChecked, ElementRef, ViewChild
import { Biography } from '../../models/biography.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BiographyService } from '../../services/biography.service';

import Splitting from 'splitting';

@Component({
  selector: 'app-single-biography',
  templateUrl: './single-biography.component.html',
  styleUrls: ['./single-biography.component.css'],
})

export class SingleBiographyComponent implements OnInit, AfterContentInit {
  /*, AfterViewInit, AfterViewChecked*/
  biography: Biography;
  animation: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private biographyService: BiographyService
  ) {}

  ngOnInit() {
    this.biography = new Biography('', '');
    const id = this.route.snapshot.params['id'];
    this.biographyService
      .getSingleBiography(+id)
      .then((biography: Biography) => {
        this.biography = biography;
      });
  }

  ngAfterContentInit() {
    Splitting();
  }

  onBack() {
    this.router.navigate(['/biography-list']);
  }
}
