import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs/Observable";
import {GroupModule} from "./group.module";


@Injectable()
export class GroupsService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  public getGroup(id: number): Observable<GroupModule> {
    return this.http.get<GroupModule>('http://pr0jectzer0.ml/api/group/' + id + '?token=' + this.auth.getToken());
  }

  public createGroup(name: string, desc: string) {
    this.http.post('https://pr0jectzer0.ml/api/group' + '?token=' + this.auth.getToken(), {'name': name, 'beschreibung': desc});
  }

  public getGroups(): Observable<GroupModule[]> {
    return this.http.get<GroupModule[]>('http://pr0jectzer0.ml/api/group/?token=' + this.auth.getToken());
  }
}