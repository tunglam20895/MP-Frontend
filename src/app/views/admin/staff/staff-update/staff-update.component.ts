import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { Users } from './../../../../entities/users';
import { FormsModule, NgForm } from '@angular/forms';
import { APIService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-update',
  templateUrl: './staff-update.component.html',
  styleUrls: ['./staff-update.component.css']
})
export class StaffUpdateComponent implements OnInit {

  user: any;
  roles: any;
  status: any;
  type: any;
  divi: any;
  diviId: number;
  divisi: any;

  @ViewChild('division') division!: ElementRef;

  constructor(private _service: APIService) {
    this.roles = [{
      role: 'ROLE_ADMIN'
    },
    {
      role: 'ROLE_MANAGER'
    },
    {
      role: 'ROLE_PM'
    },
    {
      role: 'ROLE_MEMBER'
    }]

    this.status = [
      {
        id: 0, status: 'ACTIVE'
      },
      {
        id: 1, status: 'PENDING'
      },
      {
        id: 2, status: 'DEACTIVATE'
      }
    ]
    this.type = [
      {
        id: 0, type: 'EMPLOYEE'
      },
      {
        id: 1, type: 'INTERN'
      },
      {
        id: 2, type: 'COLLABORATOR'
      }
    ]
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('updateUser') || '');
    console.log(this.user);
    this.divisi = this.user.divisions;
    this._service.getDivisions().subscribe(data => {
      this.divi = data;
    })



  }

  onSubmit() {

    console.log(this.user.divisions);
    console.log(this.division.nativeElement.value);
    this._service.updateUser(this.user, this.division.nativeElement.value).subscribe(data => {
      console.log("update thành công");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Update thành công',
        showConfirmButton: false,
        timer: 1500
      })
    }, err => {
      console.log("update thất bại");
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Update thấp bại',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }



}


