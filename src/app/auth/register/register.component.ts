import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // reactive method
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup; //reactive
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  //on initialization do...           
  ngOnInit() {
    this.initForm();
  }
  //initialize the register form
  initForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],// valid email
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]//regex for password (6 alpha-num)
    });
  }
  onSubmit() { // event (click) form the html form
    const email = this.registerForm.get('email').value; //value of email input
    const password = this.registerForm.get('password').value; //value of password input
    this.authService.createNewUser(email, password).then( //asynchronous so Promise, createNewUser from auth.service
      () => {
        this.router.navigate(['/home']); //.navigate is a method of Router
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
