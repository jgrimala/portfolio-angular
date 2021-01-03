import { Component, OnInit, OnDestroy } from '@angular/core';
import { Biography } from '../models/biography.model';
import { Subscription } from 'rxjs';
import { BiographyService } from '../services/biography.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-biography-list',
  templateUrl: './biography-list.component.html',
  styleUrls: ['./biography-list.component.css'],
})
export class BiographyListComponent implements OnInit, OnDestroy {
  biographyList: Biography[];
  biographySubscription: Subscription;
  
  constructor(private biographyService: BiographyService,
              private router: Router) { }

  ngOnInit() {
    this.biographySubscription = this.biographyService.biographySubject.subscribe(
      (biographyList: Biography[]) => {
        this.biographyList = biographyList;
      }
    );
      this.biographyService.emitBiographyList();
  }
  onNewBiography() {
    this.router.navigate(['/biography-list', 'new']);
  }
  onViewBiography(id: number) {
    this.router.navigate(['/biography-list', 'view', id]);
  }
  onDeleteBiography(biography: Biography) {
  this.biographyService.removeBiography(biography);
}
  ngOnDestroy() {
    this.biographySubscription.unsubscribe();
  } 
}