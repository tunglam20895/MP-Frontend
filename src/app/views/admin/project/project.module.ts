import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';



@NgModule({
  declarations: [ProjectDetailComponent,
  ProjectComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
  
})

export class ProjectModule { }
