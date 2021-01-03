import { Component, OnInit, OnDestroy } from '@angular/core';
import { Skill } from "../models/skill.model";
import { Subscription } from 'rxjs';
import { SkillService } from "../services/skill.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skillList: Skill[];
  skillSubscription: Subscription;
  
  constructor(private skillService: SkillService,
              private router: Router) { }

  ngOnInit() {
    this.skillSubscription = this.skillService.skillSubject.subscribe(
      (skillList: Skill[]) => {
        this.skillList = skillList;
      }

    );
      this.skillService.emitSkills();
  }
  onNewSkill() {
    this.router.navigate(['/skill-list', 'new']);
  }
  onViewSkill(id: number) {
    this.router.navigate(['/skill-list', 'view', id]);
  }
  onDeleteSkill(skill: Skill) {
  this.skillService.removeSkill(skill);
}
  ngOnDestroy() {
    this.skillSubscription.unsubscribe();
  }
  
}