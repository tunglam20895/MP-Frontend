import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  signUpForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    idPerson: new FormControl('', Validators.required)
  })

  get email() {
    return this.signUpForm.get('email')
  }
  get password() {
    return this.signUpForm.get('password')
  }
  get firstName() {
    return this.signUpForm.get('firstName')
  }
  get lastName() {
    return this.signUpForm.get('lastName')
  }
  get idPerson() {
    return this.signUpForm.get('idPerson')
  }
  get userName() {
    return this.signUpForm.get('userName')
  }
  get phone() {
    return this.signUpForm.get('phone')
  }
}
