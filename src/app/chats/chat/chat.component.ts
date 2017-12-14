import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  emojis: string[] = [
    ' 😁 ', ' 😂 '
  ];
  message: string = "";
  isEmojiClicked: false;
  user: User[];
  messages: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  sendMessage() {
    this.messages.push(this.message);
    this.message = "";
  }
}
