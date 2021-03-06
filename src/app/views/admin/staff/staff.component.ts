import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  members: any;
  totalLength: any;
  page: number = 1;

  constructor(private _service: APIService, private router: Router) { }

  ngOnInit(
  ) {
    this._service.getListMembers().subscribe((data: any) => {
      console.log("Hello: " + data);
      this.members = data;
    }, err => {
      console.log(err);
      this.router.navigate(['admin/404'])
    })
  }

  getUser(user) {
    console.log(user);
    localStorage.setItem('updateUser', JSON.stringify(user));
  }

  addMember() {
    this.router.navigate(['admin/staff/add'])
  }

  key = '';
  reserve: boolean = true;
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }
}
