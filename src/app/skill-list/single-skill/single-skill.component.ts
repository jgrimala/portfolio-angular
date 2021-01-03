import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../../services/skill.service'

@Component({
  selector: 'app-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.css']
})
export class SingleSkillComponent implements OnInit {
  skill: Skill;
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private skillService: SkillService) { }

  ngOnInit() {
    this.skill = new Skill('', null, '');
    const id = this.route.snapshot.params['id'];
    this.skillService.getSingleSkill(+id).then((skill: Skill) => {
      this.skill = skill;
    });
  }
  onBack() {
    this.router.navigate(['/skill-list']);
  }
}
