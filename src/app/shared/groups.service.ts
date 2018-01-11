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
    return this.http.get('http://pr0jectzer0.ml/api/group/' + id);
  }

  public createGroup(name: string, desc: string) {
    this.http.put('https://pr0jectzer0.ml/api/group', {'name': name, 'beschreibung': desc});
  }
}
