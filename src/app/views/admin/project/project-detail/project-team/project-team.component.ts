import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'ngx-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.scss']
})
export class ProjectTeamComponent implements OnInit {
  userProject: any;
  totalLength: any;
  page: number = 1;
  isClick = false;

  @ViewChild('username') username!: ElementRef;

  constructor(
    public dialog: MatDialog, private _service: APIService) { }

  ngOnInit() {
    this.openDialog;
    this._service.getListUserProject().subscribe((data: any) => {
      this.userProject = data;
      this.totalLength = data.length;
    }, err => {
      console.log("Lỗi truy cập");
    })
  }
  openDialog() {
    // const dialogRef = this.dialog.open(ProjectTeam);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.isClick = true;
  }

  addUser() {
    this._service.addUser(this.username.nativeElement.value).subscribe(data => {
      console.log("ADD thành công");
    }, err => console.log("ADD thất bại"))
  }


  getUserProjectAnCdDelete(userProject) {
    localStorage.setItem('userProject', JSON.stringify(userProject));
    console.log(userProject);
    Swal.fire({
      title: 'Bạn có chắc chắc muốn xóa thành viên này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        this._service.DeleteUser().subscribe(data => {
          Swal.fire(
            'Xóa thành công!',
          )
        }, error => {
          Swal.fire(
            'Xóa thất bại',
          )
        })
      }
    })
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'project-team.html',
})
export class ProjectTeam { }
