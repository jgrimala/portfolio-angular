/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; // FormGroup ->methode reactive
import { EducationService } from '../../services/education.service';
import { Router} from '@angular/router';
import { Education } from '../../models/education.model';
@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  educationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private educationService: EducationService,
              private router: Router) { }
// formBuilder et un outil qui permet de creer des objects de type formGroup plus facilement et est plus clair
  ngOnInit() {
    this.initForm();
  }
  initForm() {//cette methode creer et retourne un object de type form-group qui correspondra au formulaire du template
    this.educationForm = this.formBuilder.group({

      program: ["", Validators.required],
      diploma: ["", Validators.required],
      school: ["", Validators.required],
      dateStart: ["", Validators.required],
      dateEnd: ["", Validators.required],
      city: ["", Validators.required],
    });
  }
  onSaveEducation() {
    const formValue = this.educationForm.value;// .value contient toutes les valeurs des controls avec les validators juste en haut d'ici
    //permet de creer le nouvel utilisateur ici:
    const newEducation = new Education( // vient du modele
      formValue['program'], 
      formValue['diploma'],
      formValue['school'], 
      formValue['dateStart'], 
      formValue['dateEnd'],
      formValue['city'],
    );
    // maintenant on a le education et on utilise la methode addEducation du service avec l'object newEducation
    this.educationService.createNewEducation(newEducation);
    this.router.navigate(['/education-list']);// vers la educationList
    //maintenant, doit faire la validation avec validator
  }
}
*/