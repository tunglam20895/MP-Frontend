import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { APIService } from "src/app/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor(
    // public _service: APIService, private router: Router
  ) { }

  ngOnInit(
  ) {
    // this._service.getAut().subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   console.log(err)
    //   this.router.navigate(['/auth/login']);
    // })
  }
}
