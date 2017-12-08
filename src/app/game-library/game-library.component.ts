import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Game} from "../shared/game.module";
import {Publisher} from "../shared/publisher.model";
import {Genre} from "../shared/genre.module";

@Component({
  selector: 'app-game-library',
  templateUrl: './game-library.component.html',
  styleUrls: ['./game-library.component.css']
})
export class GameLibraryComponent implements OnInit {

  games: Game[];
  genres: Genre[];
  publishers: Publisher[];

  constructor(private auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://pr0jectzer0.ml/api/user/game/list?token=' + this.auth.getToken()).subscribe( data => {
      this.games = data['games'];
    });
    this.http.get('https://pr0jectzer0.ml/api/genre').subscribe( data => {
      this.genres = data['genres'];
    });
    this.http.get('https://pr0jectzer0.ml/api/publisher').subscribe( data => {
      this.publishers = data['publishers'];
    });
  }
}

