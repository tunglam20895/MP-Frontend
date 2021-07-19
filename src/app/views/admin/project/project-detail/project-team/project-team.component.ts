import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.scss']
})
export class ProjectTeamComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openDialog
  }
  openDialog() {
    const dialogRef = this.dialog.open(ProjectTeam);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'project-team.html',
})
export class ProjectTeam { }
