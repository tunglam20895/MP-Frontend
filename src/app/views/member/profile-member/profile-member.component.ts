import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-profile-member',
  templateUrl: './profile-member.component.html',
  styleUrls: ['./profile-member.component.css']
})
export class ProfileMemberComponent implements OnInit {

  profile: any;

  constructor(private _service: APIService) { }

  ngOnInit() {
    this._service.getProfile().subscribe(data => {
      this.profile = data;
    })
  }

}
