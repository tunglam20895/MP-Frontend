import { ProjectResComponent } from './project-detail/project-res/project-res.component';
import { ProjectDasboardComponent } from './project-detail/project-dasboard/project-dasboard.component';
import { CardSocialTrafficComponent } from './../../../../../../ITsolTest/src/app/components/cards/card-social-traffic/card-social-traffic.component';
import { CardPageVisitsComponent } from './../../../../../../ITsolTest/src/app/components/cards/card-page-visits/card-page-visits.component';
import { CardBarChartComponent } from './../../../../../../ITsolTest/src/app/components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './../../../../../../ITsolTest/src/app/components/cards/card-line-chart/card-line-chart.component';
import { ProjectTeamComponent } from './project-detail/project-team/project-team.component';
import { MatTableModule } from '@angular/material/table';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './project.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
<<<<<<< HEAD
  declarations: [ProjectDetailComponent,
    ProjectComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
=======
  declarations: [ProjectDetailComponent, ProjectTeamComponent,
    ProjectComponent, CardLineChartComponent, CardBarChartComponent, CardPageVisitsComponent, CardSocialTrafficComponent,ProjectResComponent,  ProjectDasboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    NgxPaginationModule
>>>>>>> cc1a5d4562a37afa06b1bbff25c39b5b13041ee6
  ]

})

export class ProjectModule { }
