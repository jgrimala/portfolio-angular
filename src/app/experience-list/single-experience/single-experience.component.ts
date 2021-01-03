import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from '../../services/experience.service';


@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  styleUrls: ['./single-experience.component.css']
})
export class SingleExperienceComponent implements OnInit {
  experience: Experience;
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private experienceService: ExperienceService) { }

              ngOnInit() {
                this.experience = new Experience('', '', '', '', '');
                const id = this.route.snapshot.params['id'];
                this.experienceService.getSingleExperience(+id).then(
                  (experience: Experience) => {
                    this.experience = experience;
                  }
                );
              }
  onBack() {
    this.router.navigate(['/experience-list']);
  }
}
