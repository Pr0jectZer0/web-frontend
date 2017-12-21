import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-group-forum-post',
  templateUrl: './group-forum-post.component.html',
  styleUrls: ['./group-forum-post.component.css']
})
export class GroupForumPostComponent implements OnInit {

  emojis: string[] = [
    ' 😁 ', ' 😂 '
  ];
  isEmojiClicked: false;
  message: string = "";

  constructor() {
  }

  ngOnInit() {
  }

}
