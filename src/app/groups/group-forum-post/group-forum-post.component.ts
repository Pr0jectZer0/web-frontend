import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-group-forum-post',
  templateUrl: './group-forum-post.component.html',
  styleUrls: ['./group-forum-post.component.css']
})
export class GroupForumPostComponent implements OnInit {

  emojis: string[] = [
    ' 😁 ', ' 😂 '
  ];
  isEmojiClicked = false;
  message = '';

  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        });
  }

}
