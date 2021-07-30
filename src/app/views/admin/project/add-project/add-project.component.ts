import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
import { Projects } from 'src/app/dto/projects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  newPro: Projects = new Projects();
  pm: any;
  constructor(private _service: APIService, private router: Router) {
    this._service.getListPM().subscribe(data => {
      this.pm = data;
      console.log(this.pm);
    }, err => {
      console.log(err)

    })
  }

  ngOnInit() {
  }

  addPro() {

    this._service.addProject(this.newPro).subscribe(data => {
      console.log(this.newPro);
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm dự án thành công',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['admin/project'])
    }, err => Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Thêm dự án thất bại',
      showConfirmButton: false,
      timer: 1500
    }))
  }

}