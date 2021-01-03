import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Subscription } from 'rxjs';
import { ExperienceService } from "../services/experience.service";
import { Router } from "@angular/router";
import { animationMain } from '../animations/animationMain'

//declare const popOutColors: any; 
@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css'],
  animations: [animationMain]
})
export class ExperienceListComponent implements OnInit {

  experiencesList: Experience[];
  experienceSubscription: Subscription;
  
  constructor(private experienceService: ExperienceService,
              private router: Router) { }

              
  ngOnInit() {
    this.experienceSubscription = this.experienceService.experienceSubject.subscribe(
      (experiencesList: Experience[]) => {
        this.experiencesList = experiencesList;
      }

    );
      this.experienceService.emitExperiences();
      
 
  }

  onNewExperience() {
    this.router.navigate(['/experience-list', 'new']);
  }
  onViewExperience(id: number) {
    this.router.navigate(['/experience-list', 'view', id]);
  }
  onDeleteExperience(experience: Experience) {
  this.experienceService.removeExperience(experience);
}
  ngOnDestroy() {
    this.experienceSubscription.unsubscribe();
  }
  
}
