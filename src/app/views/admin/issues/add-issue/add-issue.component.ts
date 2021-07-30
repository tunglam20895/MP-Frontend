import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Issue } from '../../../../dto/issue'

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  issue: Issue = new Issue();
  priority: any;
  target: any;
  project: any;

  constructor(private _service: APIService, private router: Router) { }

  ngOnInit() {
    this.priority = [{
      name: 'minor'
    }, {
      name: 'low'
    }, {
      name: 'normal'
    }, {
      name: 'high'
    }, {
      name: 'urge'
    }];

    this.target = [{
      name: 'backend'
    }, {
      name: 'frontend'
    }, {
      name: 'ios'
    }, {
      name: 'android'
    }];


    this._service.getListProjectToAddIssue().subscribe(data => {
      console.log(data);
      this.project = data;
    })
  }

  addIssue() {
    this._service.createIssue(this.issue).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm issue thành công',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['admin/issues'])
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Thêm dự án thất bại',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
