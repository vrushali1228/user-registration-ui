import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;

  constructor(private uForm: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.uForm.group({
      name: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log("this.userForm.==>>>>", this.userForm.value);

  }
}
