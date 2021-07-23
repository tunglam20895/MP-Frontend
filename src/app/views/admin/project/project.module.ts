import { ProjectResComponent } from './project-detail/project-res/project-res.component';
import { ProjectDasboardComponent } from './project-detail/project-dasboard/project-dasboard.component';
import { CardSocialTrafficComponent } from './../../../../../../MP-FrontEnd/src/app/components/cards/card-social-traffic/card-social-traffic.component';
import { CardPageVisitsComponent } from './../../../../../../MP-FrontEnd/src/app/components/cards/card-page-visits/card-page-visits.component';
import { CardBarChartComponent } from './../../../../../../MP-FrontEnd/src/app/components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './../../../../../../MP-FrontEnd/src/app/components/cards/card-line-chart/card-line-chart.component';
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
  declarations: [ProjectDetailComponent, ProjectTeamComponent, ProjectComponent,
     ProjectResComponent, ProjectDasboardComponent],

  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    NgxPaginationModule
  ]

})
export class ProjectModule { }
