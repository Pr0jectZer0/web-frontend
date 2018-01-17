import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs/Observable";
import {Group} from "./group.model";
import {User} from "./user.model";


@Injectable()
export class GroupsService {

  currentUser: User;

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  public getGroup(id: number): Observable<Group> {
    return this.http.get<Group>('https://pr0jectzer0.ml/api/group/' + id + '?token=' + this.auth.getToken());
  }

  public createGroup(name: string, desc: string): Observable<any> {
    return this.http.post('https://pr0jectzer0.ml/api/group?token=' + this.auth.getToken(), {
      'name': name,
      'beschreibung': desc
    });
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('https://pr0jectzer0.ml/api/user/groups?token=' + this.auth.getToken());
  }

  public joinGroup(id: number): Observable<any> {
    return this.http.get('https://pr0jectzer0.ml/api/group/' + id + '/request_access?token=' + this.auth.getToken());
  }

  public leaveGroup(id: number, userID: string): Observable<any> {
    return this.http.post('https://pr0jectzer0.ml/api/group/' + id + '/remove_user?token=' + this.auth.getToken(), {
      'id': userID
    });
  }

  public acceptAccess() {

  }

  public declineAccess() {

  }

  public getAllInvitations() {

  }

  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('https://pr0jectzer0.ml/api/groups?token=' + this.auth.getToken());
  }

  public getUser(): Observable<User> {
    return this.http.get<User>('https://pr0jectzer0.ml/api/user?token=' + this.auth.getToken());
  }

  public isMember(): Observable<Group[]> {
    return this.getGroups();
  }
}
