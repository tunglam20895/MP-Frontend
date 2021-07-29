import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues: any;
  totalLength: any;
  page: number = 1;
  constructor(private _service: APIService, private router: Router) { }

  ngOnInit() {
    this._service.getIssues().subscribe((data: any) => {
      console.log("OK");
      console.log(data);
      this.issues = data;
      this.totalLength = data.length;
    }, err => {
      console.log("Lỗi")
    })
  }

}
