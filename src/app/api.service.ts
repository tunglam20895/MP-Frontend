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

  constructor(private _http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  public getauthorization() {
    // const username = 'admin';
    // const password = 'admin';
    console.log(this.currentUser.username);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get("http://localhost:8081/public/authorization", { headers });
  }

  public login(user: Users): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.username + ':' + user.password) });
    return this._http.get("http://localhost:8081/public/login", { headers })
  }

  public createAccount(user: Users) {
    return this._http.post("http://localhost:8081/public/register", user);
  }

  public sendOTP(email: string) {
    return this._http.post("http://localhost:8081/public/sendOTP", email);
  }

  public resetPassword(username: string, email: string) {
    return this._http.post("http://localhost:8081/public/reset-password", { username: username, email: email });
  }

  public getListProject() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get("http://localhost:8081/project/list/" + this.currentUser.username, { headers });
  }

  public getListUserProject() {
    this.pro = JSON.parse(localStorage.getItem('Project'));
    this.id = this.pro.id;
    console.log(this.id);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get("http://localhost:8081/project/project-user/" + this.id, { headers });
  }

  public getAut() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get("http://localhost:8081/member/getAuthor", { headers });
  }

  public DeleteUser() {
    this.userProjectId = JSON.parse(localStorage.getItem('userProject'));
    console.log(this.id);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.delete("http://localhost:8081/project/delete-user-project/" + this.userProjectId, { headers });
  }

  public addUser(username: string): Observable<any> {
    this.pro = JSON.parse(localStorage.getItem('Project'));
    this.id = this.pro.id;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.post("http://localhost:8081/project/add-user/" + this.id, username, { headers });
  }

  public getListMembers() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get("http://localhost:8081/member/get-member", { headers });
  }

  public getListTransferProject() {
    this.pro = JSON.parse(localStorage.getItem('Project'));
    this.id = this.pro.id;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get("http://localhost:8081/project/get-transfer-project/" + this.id, { headers });
  }

  public letTransferUerProject(userTrans: any, id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password)
    });
    return this._http.post("http://localhost:8081/project/transfer-user/" + id, userTrans, { headers });
  }

}