import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Game} from "../shared/game.module";
import {Publisher} from "../shared/publisher.model";
import {Subject} from 'rxjs/Subject';
import {Genre} from "../shared/genre.module";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LibraryService {

  constructor(private auth: AuthService, private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>('https://pr0jectzer0.ml/api/user/game/list?token=' + this.auth.getToken());
  }

  public getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>('https://pr0jectzer0.ml/api/genre');
  }

  public getPublisher(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>('https://pr0jectzer0.ml/api/publisher');
  }

}
