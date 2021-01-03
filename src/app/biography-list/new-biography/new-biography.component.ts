/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; // 
import { BiographyService } from '../../services/biography.service';
import { Router} from '@angular/router';
import { Biography } from '../../models/biography.model';

@Component({
  selector: 'app-new-biography',
  templateUrl: './new-biography.component.html',
  styleUrls: ['./new-biography.component.css']
})
export class NewBiographyComponent implements OnInit {

  biographyForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private biographyService: BiographyService,
              private router: Router) { }
// formBuilder et un outil qui permet de creer des objects de type formGroup plus facilement et est plus clair
  ngOnInit() {
    this.initForm();
  }
  initForm() {//cette methode creer et retourne un object de type form-group qui correspondra au formulaire du template
    this.biographyForm = this.formBuilder.group({

      title: ["", Validators.required],
      text: ["", Validators.required],
    });
  }
  onSaveBiography() {
    const formValue = this.biographyForm.value;// .value contient toutes les valeurs des controls avec les validators juste en haut d'ici
    //permet de creer le nouvel utilisateur ici:
    const newBiography = new Biography( // vient du modele
      formValue['title'], 
      formValue['text'],
      );
    // maintenant on a le biography et on utilise la methode addBiography du service avec l'object newBiography
    this.biographyService.createNewBiography(newBiography);
    this.router.navigate(['/biography-list']);// vers la biographyList
    //maintenant, doit faire la validation avec validator
  }
}
*/