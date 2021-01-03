/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; // FormGroup ->methode reactive
import { ExperienceService } from '../../services/experience.service';
import { Router} from '@angular/router';
import { Experience } from "../../models/experience.model";

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  experienceForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private experienceService: ExperienceService,
              private router: Router) { }
// formBuilder et un outil qui permet de creer des objects de type formGroup plus facilement et est plus clair
  ngOnInit() {
    this.initForm();
  }
  initForm() {//cette methode creer et retourne un object de type form-group qui correspondra au formulaire du template
    this.experienceForm = this.formBuilder.group({

      jobTitle: ["", Validators.required],
      company: ["", Validators.required],
      dateStart: ["", Validators.required],
      dateEnd: ["", Validators.required],
      city: ["", Validators.required],
    });
  }
  onSaveExperience() {
    const formValue = this.experienceForm.value;// .value contient toutes les valeurs des controls avec les validators juste en haut d'ici
    //permet de creer le nouvel utilisateur ici:
    const newExperience = new Experience( // vient du modele
      formValue['jobTitle'], 
      formValue['company'],
      formValue['dateStart'], 
      formValue['dateEnd'],
      formValue['city'],
    );
    // maintenant on a le experience et on utilise la methode addExperience du service avec l'object newExperience
    this.experienceService.createNewExperience(newExperience);
    this.router.navigate(['/experience-list']);// vers la experienceList
    //maintenant, doit faire la validation avec validator
  }
}
*/