import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.template.html',
  styleUrls: ['./sign-in.style.css'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  emailHolderUp: boolean;
  pwHolderUp: boolean;
  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.pattern(
          '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$'
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(60),
      ]),
    });

    this.emailHolderUp = false;
    this.pwHolderUp = false;
  }

  emailFocus(value: string) {
    this.emailHolderUp = value ? true : false;
  }

  pwFocus(value: string) {
    this.pwHolderUp = value ? true : false;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
