import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Game} from "../shared/game.module";
import {Publisher} from "../shared/publisher.model";
import {Subject} from 'rxjs/Subject';
import {Genre} from "../shared/genre.module";

@Injectable()
export class LibraryService {

  games: Game[];
  genres: Genre[];
  publishers: Publisher[];

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  public getGames(): Subject<Game[]> {
    let tmp = new Subject<Game[]>();

    this.http.get('https://pr0jectzer0.ml/api/user/game/list?token=' + this.auth.getToken()).subscribe(data => {
      this.games = data['games'];
      tmp.next(this.games);
    });
    return tmp;
  }

  public getGenres(): Subject<Genre[]> {
    let tmp = new Subject<Genre[]>();

    this.http.get('https://pr0jectzer0.ml/api/genre').subscribe(data => {
      this.genres = data['Genre'];
      tmp.next(this.genres);
    });
    return tmp;
  }

  public getPublisher(): Subject<Publisher[]> {
    let tmp = new Subject<Publisher[]>();

    this.http.get('https://pr0jectzer0.ml/api/publisher').subscribe(data => {
      this.publishers = data['publisher'];
      tmp.next(this.publishers);
    });
    return tmp;
  }

}
