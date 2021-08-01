import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { Comment } from 'src/app/dto/comment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-issues-detail',
  templateUrl: './issues-detail.component.html',
  styleUrls: ['./issues-detail.component.css']
})
export class IssuesDetailComponent implements OnInit {

  cmtDTO: Comment = new Comment();
  issue: any;
  comments: any;
  idIssue: number;
  user: any;

  updater: any;

  @ViewChild('cmt') cmt!: ElementRef;

  constructor(private _service: APIService, private router: Router) { }

  ngOnInit() {
    this.issue = JSON.parse(localStorage.getItem('issue') || '');
    console.log(this.issue);
    this.idIssue = this.issue.id;
    this._service.getComment(this.idIssue).subscribe(data => {
      console.log(data);
      this.comments = data;
    }, err => console.log(err))
    this.user = JSON.parse(localStorage.getItem('currentUser') || '');

    this._service.getUpdater(this.idIssue).subscribe(data => {
      console.log("load suscess updater")
      this.updater = data;
    }, err => console.log("load fail"))
  }

  postCmt() {
    this.cmtDTO.issueId = this.issue.id;
    this.cmtDTO.username = this.user.username;
    this.cmtDTO.content = this.cmt.nativeElement.value;
    console.log(this.cmtDTO);
    this._service.createComment(this.cmtDTO).subscribe(data => {
      console.log("ok")
      window.location.reload();
    }, err => Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Bình luận không hợp lệ',
      showConfirmButton: false,
      timer: 1500
    }))
  }

  setProgress() {
    return { 'width': this.issue.progress + '%' };
  }

}
