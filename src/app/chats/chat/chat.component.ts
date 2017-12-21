import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/user.model';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {PusherService} from '../../shared/pusher.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  emojis: string[] = [
    ' 😁 ', ' 😂 '
  ];
  chatid: number;
  isEmojiClicked: false;
  message: string = "";
  messages: {chatroom_id: number, created_at: string, id: number, message: string, updated_at: string, user: User, user_id: number}[];
  channel: any;

  constructor(private http: HttpClient,
              private auth: AuthService,
              private p: PusherService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatid = params['id'];
      this.updateMessages();
    });

    this.channel = this.p.pusher.subscribe('private-chat.' + this.chatid);
    this.channel.bind('App\\Events\\MessageSent', () => {
      this.updateMessages();
    });
  }

  sendMessage() {
    this.http.post('https://pr0jectzer0.ml/api/chatroom/' + this.chatid + '/messages?token=' + this.auth.getToken(),
      {'message': this.message}).subscribe();

    this.message = "";
  }

  updateMessages() {
    this.http.get('https://pr0jectzer0.ml/api/chatroom/' + this.chatid + '/messages?token=' + this.auth.getToken())
      .subscribe(
        data => {
          this.messages = data['message'];
        }
      );
  }
}
