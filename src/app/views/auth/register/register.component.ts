import { FormGroup, Validators, FormControl, } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/users';
import { APIService } from '../../../api.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public _service: APIService, private router: Router

  ) { }

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
  get otp() {
    return this.signUpForm.get('email')
  }

  user = new Users();
  errorMessage!: string;
  OTP: any;
  checkMail = false;
  isSended = false;
  ivalidOTP = '';
  successOTP = false;

  @ViewChild('Email') Email!: ElementRef;
  @ViewChild('userOTP') userOTP!: ElementRef;

  signUpForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    idPerson: new FormControl('', Validators.required),
    otp: new FormControl('', Validators.required)
  })

  ngOnInit(

  ): void { }


  public register() {
    this._service.createAccount(this.user).subscribe(data => {
      console.log('Đăng ký thành công');
      this.router.navigate(['/auth/login']);
    }, err => {
      console.log('Đăng ký thất bại');
      this.errorMessage = 'Username đã tồn tại';
    })
  }

  public sendOTP() {
    this._service.sendOTP(this.Email.nativeElement.value).subscribe(data => {
      this.checkMail = true;
      console.log(data);
      this.OTP = data;
    }, err => {
      console.log('Vui lòng nhập Eamil');
      this.checkMail = false
      console.log(this.Email.nativeElement.value)
    })
  }

  public checkOTP() {
    // tslint:disable-next-line: triple-equals
    if (this.OTP == this.userOTP.nativeElement.value) {
      console.log(this.userOTP.nativeElement.value);
      this.successOTP = true;
    } else {
      console.log('Sai mã OTP')
      this.ivalidOTP = 'Sai mã OTP';
      this.successOTP = false;
    }
  }


}
