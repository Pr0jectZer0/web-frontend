import {Component, OnInit} from '@angular/core';
import {Game} from "../../shared/game.module";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Genre} from "../../shared/genre.module";
import {Publisher} from "../../shared/publisher.model";
import {LibraryService} from "../library.service";
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  id: number;
  games: Game[];
  game: Game;
  genres: Genre[];
  publishers: Publisher[];


  constructor(private route: ActivatedRoute, private libraryService: LibraryService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    this.libraryService.getGames().subscribe(data => {
      this.games = data;
    });
    this.libraryService.getGenres().subscribe(data => {
      this.genres = data;
    });
    this.libraryService.getPublisher().subscribe(data => {
      this.publishers = data;
    });
  }
}
