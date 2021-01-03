import { Component, OnInit, OnDestroy } from '@angular/core';
import { Education } from "../models/education.model";
import { Subscription } from 'rxjs';
import { EducationService } from "../services/education.service";
import { Router } from "@angular/router";
import { animationMain } from '../animations/animationMain';
@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css'],
  animations: [animationMain],
})
export class EducationListComponent implements OnInit, OnDestroy {
  public animatePage = true;
  educationList: Education[];
  educationSubscription: Subscription;

 
  constructor(
    private educationService: EducationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.educationSubscription = this.educationService.educationSubject.subscribe(
      (educationList: Education[]) => {
        this.educationList = educationList;
      }
    );
    this.educationService.emitEducations();
  }
  

  
  onNewEducation() {
    this.router.navigate(['/education-list', 'new']);
  }
  onViewEducation(id: number) {
    this.router.navigate(['/education-list', 'view', id]);
  }
  onDeleteEducation(education: Education) {
    this.educationService.removeEducation(education);
  }
  ngOnDestroy() {
    this.educationSubscription.unsubscribe();
  }
}
