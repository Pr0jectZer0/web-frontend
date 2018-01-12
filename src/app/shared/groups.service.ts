import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs/Observable";
import {Group} from "./group.model";


@Injectable()
export class GroupsService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  public getGroup(id: number): Observable<Group> {
    return this.http.get<Group>('https://pr0jectzer0.ml/api/group/' + id + '?token=' + this.auth.getToken());
  }

  public createGroup(name: string, desc: string) {
    this.http.post('https://pr0jectzer0.ml/api/group' + '?token=' + this.auth.getToken(), {'name': name, 'beschreibung': desc});
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('https://pr0jectzer0.ml/api/groups?token=' + this.auth.getToken());
  }
}
