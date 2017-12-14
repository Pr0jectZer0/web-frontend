import {Component, OnInit} from '@angular/core';
import {Game} from "../../shared/game.module";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Genre} from "../../shared/genre.module";
import {Publisher} from "../../shared/publisher.model";
import {LibraryService} from "../library.service";


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  id: number;
  game: Game;
  genre: Genre;
  publisher: Publisher;


  constructor(private route: ActivatedRoute, private libraryService: LibraryService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

}
