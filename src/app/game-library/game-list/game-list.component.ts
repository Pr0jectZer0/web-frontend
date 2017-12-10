import {Component, OnInit} from '@angular/core';
import {Publisher} from "../../shared/publisher.model";
import {Genre} from "../../shared/genre.module";
import {Game} from "../../shared/game.module";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];
  genres: Genre[];
  publishers: Publisher[];

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://pr0jectzer0.ml/api/user/game/list?token=' + this.auth.getToken()).subscribe(data => {
      this.games = data['games'];
    });
    this.http.get('https://pr0jectzer0.ml/api/genre').subscribe(data => {
      this.genres = data['genres'];
    });
    this.http.get('https://pr0jectzer0.ml/api/publisher').subscribe(data => {
      this.publishers = data['publishers'];
    });
  }

}
