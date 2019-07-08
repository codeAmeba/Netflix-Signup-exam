import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-hyunjin',
  templateUrl: './hyunjin.template.html',
  styleUrls: ['./hyunjin.style.css'],
})
export class HyunjinComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
