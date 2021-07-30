import { UpdateProfileMemberComponent } from './views/member/update-profile-member/update-profile-member.component';
import { ProfileMemberComponent } from './views/member/profile-member/profile-member.component';
import { MemberComponent } from './views/member/member.component';
import { StaffUpdateComponent } from './views/admin/staff/staff-update/staff-update.component';
import { ForgotPasswordComponent } from './views/auth/forgot-password/forgot-password.component';
import { ProjectDetailComponent } from './views/admin/project/project-detail/project-detail.component';
import { ReportComponent } from './views/admin/report/report.component';
import { IssuesComponent } from './views/admin/issues/issues.component';
import { StaffComponent } from './views/admin/staff/staff.component';
import { ProjectComponent } from './views/admin/project/project.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { PermissionComponent } from './views/admin/permission/permission.component';
import { AddProjectComponent } from './views/admin/project/add-project/add-project.component';
import { AddIssueComponent } from './views/admin/issues/add-issue/add-issue.component';

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "project", component: ProjectComponent },
      { path: "project/add", component: AddProjectComponent },
      { path: "project/detail", component: ProjectDetailComponent },
      { path: "staff", component: StaffComponent },
      { path: "staff/update", component: StaffUpdateComponent },
      { path: "issues/add", component: AddIssueComponent },
      { path: "issues", component: IssuesComponent },
      { path: "report", component: ReportComponent },
      { path: "permission", component: PermissionComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "forgotpassword", component: ForgotPasswordComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },


  {
    path: "member",
    component: MemberComponent,
    children: [
      { path: "profile", component: ProfileMemberComponent },
      { path: "update", component: UpdateProfileMemberComponent },
      { path: "", redirectTo: "profile", pathMatch: "full" },
    ],
  },

  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
