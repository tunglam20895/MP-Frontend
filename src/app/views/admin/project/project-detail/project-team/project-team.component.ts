import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UserProjectDto } from 'src/app/dto/userProjectDto';
import { Router } from '@angular/router';

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
  isClickTransfer = false;
  listTransfer: any;
  selectedDevice: any;

  newUserTranfer: any;
  id: any;


  @ViewChild('username') username!: ElementRef;
  @ViewChild('idProjectTransfer') idProjectTranfer!: ElementRef;
  @ViewChild('userTranfer') userTranfer!: ElementRef;

  constructor(
    public dialog: MatDialog, private _service: APIService, private router: Router) { }

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
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm thành viên thành công',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.reload();
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Thêm thành viên thấp bại',
        showConfirmButton: false,
        timer: 1500
      })

    })
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
          window.location.reload();
        }, error => {
          Swal.fire(
            'Xóa thất bại',
          )
        })
      }
    })
  }


  getListTransferProject() {
    this._service.getListTransferProject().subscribe(data => {
      this.isClickTransfer = true;
      this.listTransfer = data;
    }, err => console.log("Lỗi " + err))
  }

  onClickTransfer(newUser: any) {
    console.log(newUser);
    this.newUserTranfer = newUser;
  }

  getUserTransfer() {
    this.id = JSON.parse(this.idProjectTranfer.nativeElement.value)
    console.log(this.newUserTranfer);
    this._service.letTransferUerProject(this.newUserTranfer, this.id).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Điều chuyển thành công',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.reload();
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Điều chuyển thất bại',
        showConfirmButton: false,
        timer: 1500
      })

    }
    )
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'project-team.html',
})
export class ProjectTeam { }
