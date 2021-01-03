import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // reactive method
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; //reactive
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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],// valid email
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]//regex for password (6 alpha-num)
    });
  }
  onSubmit() { // event (click) form the html form
    const email = this.loginForm.get('email').value; //value of email input
    const password = this.loginForm.get('password').value; //value of password input
    this.authService.loginUser(email, password).then( //asynchronous so Promise, loginUser from auth.service
      () => {
        this.router.navigate(['/home']); //.navigate is a method of Router
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}



