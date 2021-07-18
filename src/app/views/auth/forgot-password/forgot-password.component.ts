import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { APIService } from '../../../api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  message: any;
  checkRs: boolean;

  @ViewChild('username') username!: ElementRef
  @ViewChild('mail') mail!: ElementRef

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)

  });
  get email() {
    return this.forgotPasswordForm.get('email')
  }

  constructor(public _service: APIService) { }

  ngOnInit() {
  }

  public resetPassword() {
    this._service.resetPassword(this.username.nativeElement.value, this.mail.nativeElement.value).subscribe(data => {
      this.message = 'Mật khẩu mới đã cấp về mail của bạn';
      this.checkRs = true;
      console.log('Ok ' + data);
    }, err => {
      this.message = 'Username hoặc Email của bạn không đúng';
      this.checkRs = false;
      console.log('Lỗi ' + err)
      console.log(this.mail.nativeElement.value);
    })
  }
}