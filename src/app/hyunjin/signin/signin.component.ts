import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.template.html',
  styleUrls: ['./signin.style.css'],
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern("^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{4,60}')
      ]]
    })
  }

  get userid() {
    return this.userForm.get('userid');
  }
  get password() {
    return this.userForm.get('password')
  }

}
