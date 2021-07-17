import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = new FormGroup({
    email: new FormControl('',Validators.required),

  });
  get email(){
    return this.forgotPasswordForm.get('email')
  }

  constructor() { }

  ngOnInit() {
  }


}