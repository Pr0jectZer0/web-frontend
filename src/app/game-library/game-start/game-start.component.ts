import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  ngOnInit() {
  }
}

