/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; // FormGroup ->methode reactive
import { UserService } from '../../services/user.service';
import { Router} from '@angular/router';
import { User } from '../../models/user.model';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }
// formBuilder et un outil qui permet de creer des objects de type formGroup plus facilement et est plus clair
  ngOnInit() {
    this.initForm();
  }
  initForm() {//cette methode creer et retourne un object de type form-group qui correspondra au formulaire du template
    this.userForm = this.formBuilder.group({
      //les controls du formulaire (formControls)
      /*firstName: "",
      lastName: "",
      email: "",
      drinkPreference: ""*/
/*
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      linkedin: ["", Validators.required],
      website: ["", Validators.required],
      city: ["", Validators.required],
    });
  }
  onSaveUser() {
    const formValue = this.userForm.value;// .value contient toutes les valeurs des controls avec les validators juste en haut d'ici
    //permet de creer le nouvel utilisateur ici:
    const newUser = new User( // vient du modele
      formValue['firstName'], 
      formValue['lastName'], 
      formValue['phone'], 
      formValue['email'],
      formValue['linkedin'],
      formValue['website'],
      formValue['city'],
    
    );
    // maintenant on a le user et on utilise la methode addUser du service avec l'object newUser
    this.userService.createNewUser(newUser);
    this.router.navigate(['/user-list']);// vers la userList
    //maintenant, doit faire la validation avec validator
  }
}
*/