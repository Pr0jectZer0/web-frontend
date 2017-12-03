import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  isSelected: boolean = false;
  isFriendsSelected: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.isSelected = !this.isSelected;
  }

  onUpdateView() {
    this.isFriendsSelected = !this.isFriendsSelected;
  }
}
