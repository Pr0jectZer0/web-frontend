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
  game: Game = new Game(0, "", "", 0, 0, "", "");
  publisher: Publisher = new Publisher(0, "", "", "");
  genre: Genre = new Genre(0, "", "", "");


  constructor(private route: ActivatedRoute, private libraryService: LibraryService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.libraryService.getGame(this.id).subscribe(
            game => {
              this.game = game['game'];
              this.libraryService.getGenres().subscribe(genres => {
                for(let genre of genres['Genre']) {
                  if(this.game.id_genre == genre.id) {
                    this.genre = genre;
                    break;
                  }
                }
              });
              this.libraryService.getPublisher().subscribe(publishers => {
                for(let publisher of publishers['publisher']) {
                  if(this.game.id_publisher == publisher.id) {
                    this.publisher = publisher;
                    break;
                  }
                }
              });
            }
          );
        }
      );
  }
}
