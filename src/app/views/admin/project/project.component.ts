import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { APIService } from 'src/app/api.service';
import { TransferService } from '../../../transfer.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: any;
  totalLength: any;
  page: number = 1;

  @ViewChild('id') id!: ElementRef;

  constructor(public _service: APIService, private router: Router, private transferService: TransferService) { }

  ngOnInit() {
    this._service.getListProject().subscribe((data: any) => {
      this.project = data;
      this.totalLength = data.length;
    }, err => {
      console.log("Lỗi truy cập" + err)

    })
  }

  getUserIdAndProjectId() {
    this.transferService.setData(this.project)
  }
  getPro(project: any) {
    console.log(project)
    localStorage.setItem('Project', JSON.stringify(project));
  }

}
