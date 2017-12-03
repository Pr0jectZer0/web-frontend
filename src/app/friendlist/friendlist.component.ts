import { Component, OnInit } from '@angular/core';
import {DisableService} from '../shared/disable.service';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  isSelected: boolean = false;
  isFriendsSelected: boolean = true;

  constructor(private disableService: DisableService) { }

  ngOnInit() {
    this.disableService.disable.subscribe(
      data => {
        if(data) {
          this.isSelected = false;
        }
      }
    );
  }

  onClicked() {
    if(this.isSelected != true)
      this.isSelected = !this.isSelected;
  }

  onUpdateView() {
    this.isFriendsSelected = !this.isFriendsSelected;
  }
}
