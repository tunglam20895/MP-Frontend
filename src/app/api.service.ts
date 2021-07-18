import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  currentUser = new Users();

  constructor(private _http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
  }

  public admin() {
    // const username = 'admin';
    // const password = 'admin';
    console.log(this.currentUser.username);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.currentUser.username + ':' + this.currentUser.password) });
    return this._http.get("http://localhost:8081/admin", { headers });
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
}