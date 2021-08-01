import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {

  issue: any;
  target: any;
  priority: any;
  status: any;
  constructor(private _service: APIService, private router: Router) {
    this.target = [{
      value: 'backend'
    }, {
      value: 'frontend'
    }, {
      value: 'android'
    }, {
      value: 'ios'
    }];

    this.priority = [{
      value: 'minor'
    }, {
      value: 'low'
    }, {
      value: 'normal'
    }, {
      value: 'high'
    }, {
      value: 'urge'
    }];

    this.status = [{
      value: 'new'
    }, {
      value: 'in progress'
    }, {
      value: 'resolved'
    }, {
      value: 'build'
    }, {
      value: 'urgrejecte'
    }, {
      value: 'close'
    }, {
      value: 'watching'
    }];
  }

  ngOnInit() {
    this.issue = JSON.parse(localStorage.getItem('issue') || '');
    console.log(this.issue);
  }

  updateIssue() {
    this._service.updateIssue(this.issue).subscribe(data => {
      console.log("OK");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Update issue thành công',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['admin/issues'])
    }, err => {
      console.log("Lỗi");
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Update issue thất bại',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
