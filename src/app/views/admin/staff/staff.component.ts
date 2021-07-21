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
      console.log("Hello bé: " + data);
      this.members = data;
    }, err => {
      console.log(err);
    })
  }

}
