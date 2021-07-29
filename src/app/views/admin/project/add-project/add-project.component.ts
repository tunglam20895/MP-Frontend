import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
import { Projects } from 'src/app/dto/projects';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  newPro: Projects = new Projects();
  pm: any;
  constructor(private _service: APIService) {
    this._service.getListPM().subscribe(data => {
      this.pm = data;
      console.log(this.pm);
    }, err => console.log(err))
  }

  ngOnInit() {
  }

  addPro() {

    this._service.addProject(this.newPro).subscribe(data => {
      console.log(this.newPro);
      console.log(data);
      console.log("Thêm thành công");
    }, err => console.log("Lỗi" + err))
  }

}