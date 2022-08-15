import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface IUser {
  email: string,
  password: string,
  token?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._registerUrl, user)
  }

  loginUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._loginUrl, user)
  }

  isloggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  getToken(): string {
    return localStorage.getItem('token')
  }

  logOutUser(): void {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

}
