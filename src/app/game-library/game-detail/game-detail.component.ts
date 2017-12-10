import { Component, OnInit } from '@angular/core';
import {Game} from "../../shared/game.module";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game: Game
  id: number

  constructor() { }

  ngOnInit() {
  }

}
