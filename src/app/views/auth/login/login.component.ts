import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/entities/users';
import { APIService } from '../../../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users = new Users();
  isLoggedIn: any;
  ivalidMessage: string;

  constructor(private _service: APIService, private router: Router) { }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void { }

  loginUser() {
    this._service.login(this.user).subscribe(
      data => {
        console.log('Đăng nhập thành công');
        console.log(data);
        this.isLoggedIn = true;
        this.router.navigate(['/admin/dashboard']);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
      },
      err => {
        console.log('Sai username hoặc password');
        this.ivalidMessage = 'Sai username hoặc password';
        this.isLoggedIn = false;

      }
    )
  }

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // passwordFormControl = new FormControl('', [
  //   Validators.required
  // ]);

  // matcher = new MyErrorStateMatcher();
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
