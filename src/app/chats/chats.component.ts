import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PusherService} from '../shared/pusher.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats: {id: number, name: string, anzahl: number}[] = [];

  constructor(private http: HttpClient, private p: PusherService) { }

  ngOnInit() {
    this.chats.push({id: 1, name: 'Hallo', anzahl: 4});
  }

}
