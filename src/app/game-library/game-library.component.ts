import {Component, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit() {
  }
}

