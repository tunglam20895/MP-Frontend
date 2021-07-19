import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './project.component';



@NgModule({
  declarations: [ProjectDetailComponent,
    ProjectComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ]

})

export class ProjectModule { }
