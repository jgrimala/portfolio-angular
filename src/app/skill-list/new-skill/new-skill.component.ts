/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; // FormGroup ->methode reactive
import { SkillService } from '../../services/skill.service';
import { Router} from '@angular/router';
import { Skill } from "../../models/skill.model";

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  skillForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private router: Router) { }
// formBuilder et un outil qui permet de creer des objects de type formGroup plus facilement et est plus clair
  ngOnInit() {
    this.initForm();
  }
  initForm() {//cette methode creer et retourne un object de type form-group qui correspondra au formulaire du template
    this.skillForm = this.formBuilder.group({

      skillName: ["", Validators.required],
      rating: ["", Validators.required],
      category: ["", Validators.required]
    });
  }
  onSaveSkill() {
    const formValue = this.skillForm.value;// .value contient toutes les valeurs des controls avec les validators juste en haut d'ici
    //permet de creer le nouvel utilisateur ici:
    const newSkill = new Skill( // vient du modele
      formValue['skillName'], 
      formValue['rating'],
      formValue['category']
    );
    // maintenant on a le skill et on utilise la methode addSkill du service avec l'object newSkill
    this.skillService.createNewSkill(newSkill);
    this.router.navigate(['/skill-list']);// vers la skillList
    //maintenant, doit faire la validation avec validator
  }
}
*/