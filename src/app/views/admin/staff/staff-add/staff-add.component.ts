import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { Users } from './../../../../entities/users';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent implements OnInit {
  user: Users = new Users();
  role: any;
  division: any;

  @ViewChild('divi') divi!: ElementRef;
  constructor(private _service: APIService, private router: Router) {
    this.role = [{
      role: 'ROLE_MEMBER'
    }, {
      role: 'ROLE_PM'
    }, {
      role: 'ROLE_MANAGER'
    }, {
      role: 'ROLE_ADMIN'
    }]


  }

  ngOnInit() {
    this._service.getDivisions().subscribe(data => {
      this.division = data;
    })

  }

  addMember() {
    this._service.createMember(this.user, this.divi.nativeElement.value).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm member thành công',
        showConfirmButton: false,
        timer: 1500
      })
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Thêm thất bại',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
