import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Game} from "../shared/game.module";
import {Publisher} from "../shared/publisher.model";

@Injectable()
export class LibraryService {

  games: Game[];

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  public getGames() {
    this.http.get('https://pr0jectzer0.ml/api/user/game/list?token=' + this.auth.getToken()).subscribe(data => {
      this.games = data['games'];
    });
    return this.games;
  }
}
