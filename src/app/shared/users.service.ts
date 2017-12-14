import { Injectable } from '@angular/core';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UsersService {
  users = new Subject<User[]>();

  constructor(private http: HttpClient) {
    this.http.get<User[]>('https://pr0jectzer0.ml/api/users').subscribe(
      data => {
        this.users.next(data['users']);
      }
    );
  }

  public getAllUsers(): Subject<User[]> {
    return this.users;
  }

  public getUserbyID(id: number): Subject<User> {
    let u = new Subject<User>();

    this.users.subscribe(
      data => {
        for(let user of data) {
          if(user.id === id) {
            u.next(user);
          }
        }
      }
    );

    return u;
  }

  public getUserbyName(name: string): Subject<User> {
    let u = new Subject<User>();

    this.users.subscribe(
      data => {
        for(let user of data) {
          if(user.name === name) {
            u.next(user);
          }
        }
      }
    );

    return u;
  }

}
