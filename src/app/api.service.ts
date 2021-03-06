import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './entities/users';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  userProjectId: number;
  currentUser = new Users();
  pro: any;
  id: number;

  API = "http://localhost:8081/";
  constructor(private _http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');

  }

  public getauthorization() {
    // const username = 'admin';
    // const password = 'admin';
    console.log(this.currentUser.username);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "public/authorization", { headers });
  }

  public login(user: Users): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.username + ':' + user.password) });
    return this._http.get(this.API + "public/login", { headers })
  }

  public createAccount(user: Users) {
    return this._http.post(this.API + "public/register", user);
  }

  public sendOTP(email: string) {
    return this._http.post(this.API + "public/sendOTP", email);
  }

  public resetPassword(username: string, email: string) {
    return this._http.post(this.API + "public/reset-password", { username: username, email: email });
  }

  public getListProject() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "project/list/" + this.currentUser.username, { headers });
  }

  public getListUserProject() {
    this.pro = JSON.parse(localStorage.getItem('Project') || '');
    this.id = this.pro.id;
    console.log(this.id);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "project/project-user/" + this.id, { headers });
  }

  public getAut() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "profile/author", { headers });
  }

  public DeleteUser() {
    this.userProjectId = JSON.parse(localStorage.getItem('userProject') || '');
    console.log(this.id);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.delete(this.API + "project/delete-user-project/" + this.userProjectId, { headers });
  }

  public addUser(username: string): Observable<any> {
    this.pro = JSON.parse(localStorage.getItem('Project') || '');
    this.id = this.pro.id;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.post(this.API + "project/add-user/" + this.id, username, { headers });
  }

  public getListMembers() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "member/get-member", { headers });
  }

  public getListTransferProject() {
    this.pro = JSON.parse(localStorage.getItem('Project') || '');
    this.id = this.pro.id;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "project/get-transfer-project/" + this.id, { headers });
  }

  public letTransferUerProject(userTrans: any, id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password)
    });
    return this._http.post(this.API + "project/transfer-user/" + id, userTrans, { headers });
  }

  public getListPM() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "project/PM", { headers });
  }

  public addProject(project: any) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.post(this.API + "project/add-project", project, { headers });
  }

  public getDivisions() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "member/get-divisions", { headers });
  }

  public updateUser(user: any, id: number): Observable<any> {

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password)
    });
    return this._http.post(this.API + "member/save-member/" + id, user, { headers });
  }

  public createMember(user: any, id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password)
    });
    return this._http.post(this.API + "member/create-member/" + id, user, { headers });
  }

  //Profile
  public getProfile() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "profile/get-info/" + this.currentUser.username, { headers });
  }


  public updateProfile(user: any) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.post(this.API + "profile/update-profile", user, { headers });
  }

  //issue
  public getIssues() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "issue/issues/" + this.currentUser.username, { headers });
  }

  public getListProjectToAddIssue() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "issue/get-project/" + this.currentUser.username, { headers });
  }

  public createIssue(issue: any) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.post(this.API + "issue/create-issue/" + this.currentUser.username, issue, { headers });
  }

  public deleteIssue(id: number) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.delete(this.API + "issue/delete-issue/" + id, { headers });
  }

  public getComment(id: number) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "issue/comments/" + id, { headers });
  }

  public getUpdater(id: number) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get(this.API + "issue/updaters/" + id, { headers });
  }

  public createComment(cmt: any) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.post(this.API + "issue/create-comment", cmt, { headers });
  }

  public updateIssue(issue: any) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.post(this.API + "issue/update-issue/" + this.currentUser.username, issue, { headers });
  }


}

