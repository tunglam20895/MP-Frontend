import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: any;
  totalLength: any;
  page: number = 1;


  constructor(public _service: APIService, private router: Router) { }

  ngOnInit() {
    this._service.getListProject().subscribe((data: any) => {
      this.project = data;
      this.totalLength = data.length;
    }, err => {
      console.log(err)
    })
  }

  public getListProject() {

  }
}
