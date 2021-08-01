import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
      this.router.navigate(['admin/404'])
    })
  }

  addIssue(issueProject: any) {
    this.router.navigate(['admin/issues/add'])
    // console.log(this.issues);
    // localStorage.setItem('issue', JSON.stringify(this.issues))
  }

  deleteIssue(id) {
    Swal.fire({
      title: 'Bạn có chắc chắc muốn xóa issue này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.deleteIssue(id).subscribe(data => {
          Swal.fire(
            'Xóa thành công!',
          )
          window.location.reload();
        }, error => {
          Swal.fire(
            'Xóa thất bại',
          )
        })
      }
    })
  }

  key = '';
  reserve: boolean = true;
  sort(key) {
    this.key = key;
    this.reserve = !this.reserve;
  }

  getIssue(issue) {
    // this.router.navigate(['admin/issues/detail'])
    localStorage.setItem('issue', JSON.stringify(issue));
  }
}
