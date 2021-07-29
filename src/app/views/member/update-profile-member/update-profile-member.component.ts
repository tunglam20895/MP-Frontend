import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { APIService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile-member',
  templateUrl: './update-profile-member.component.html',
  styleUrls: ['./update-profile-member.component.css']
})
export class UpdateProfileMemberComponent implements OnInit {

  user: any;
  gender: any;

  constructor(private _service: APIService) { }

  ngOnInit() {
    this._service.getProfile().subscribe(data => {
      this.user = data;
      console.log(this.user)
    })

    this.gender = [{
      gender: 'NAM'
    }, {
      gender: 'NỮ'
    }]
  }

  updateProfile() {
    console.log(this.user);
    this._service.updateProfile(this.user).subscribe(data => {
      console.log("update thành công");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Update thành công',
        showConfirmButton: false,
        timer: 1500
      })
    }, err => {
      console.log("update thất bại")
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Update thất bại',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
}
