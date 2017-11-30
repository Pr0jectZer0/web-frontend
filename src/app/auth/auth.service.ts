import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { tokenNotExpired } from "angular2-jwt";
import {Token} from "../shared/token.model";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  //test123
  //t@t.de
  //hallo1234

  public signupUser(username: string, email: string, password: string) {
    this.http.post("https://pr0jectzer0.ml/api/user", {'name': username, 'password': password, 'email': email})
      .subscribe(
      data => {
        this.signinUser(email, password);
      }
    );
  }

  public signinUser(email: string, password: string) {
    this.http.post<Token>("https://pr0jectzer0.ml/api/user/login", {'email': email, 'password': password})
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
        }
      );
  }

  public signOut() {
    localStorage.removeItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated() {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }
}
