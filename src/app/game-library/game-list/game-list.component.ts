import {Component, OnInit} from '@angular/core';
import {Game} from "../../shared/game.module";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {LibraryService} from "../library.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];

  constructor(private auth: AuthService, private http: HttpClient, private libraryService: LibraryService) {
  }

  ngOnInit() {
    this.games = this.libraryService.getGames();
  }

}
