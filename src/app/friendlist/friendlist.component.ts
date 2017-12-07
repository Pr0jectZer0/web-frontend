import { Component, OnInit } from '@angular/core';
import { DisableService } from '../shared/disable.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css'],
  animations: [
    trigger('bodyState', [
      state('closed', style({height: '40px', backgroundColor: '#FFFFFF'})),
      state('opened', style({height: 'calc(100% - 58px)'})),
      transition('closed <=> opened', [
        animate(250)
      ])
    ]),
    trigger('body', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class FriendlistComponent implements OnInit {

  set username(event: Event) {
    this._username = (<HTMLInputElement>event.target).value;
  }

  friends: User[];
  private _username: string = "";
  body: string = 'in';
  state: string = 'closed';
  error: string = 'Freund hinzufügen';
  isFriendsSelected: boolean = true;
  isGroupsSelected: boolean = false;

  constructor(private disableService: DisableService, private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.disableService.disable.subscribe(
      data => {
        if(data) {
          this.state = 'closed';
        }
      }
    );

    this.updateFriends();
  }

  onClicked() {
    if(this.state == 'closed') {
      this.state = 'opened';
    }
  }

  addFriend() {
    this.http.post('https://pr0jectzer0.ml/api/friend/add?token=' + this.auth.getToken(), {'id': this._username})
      .subscribe(
        () => {
          this.updateFriends();
        }, () => {
          this.error = "Freund bereits vorhanden";
        }
    );
  }

  deleteFriend(id: number) {
    this.http.delete('https://pr0jectzer0.ml/api/friend/remove/'+ id +'?token=' + this.auth.getToken()).subscribe(
      () => {
        this.updateFriends();
      }
    );
  }

  onFriendsView() {
    if(!this.isFriendsSelected) {
      this.isGroupsSelected = false;
      this.isFriendsSelected = true;
    }
  }

  updateFriends() {
    this.http.get<User[]>('https://pr0jectzer0.ml/api/friends?token=' + this.auth.getToken())
      .subscribe(data => {
        this.friends = data['friends'];
      });
    this.error = "Freund hinzufügen";
  }

  onGroupsView() {
    if(!this.isGroupsSelected) {
      this.isFriendsSelected = false;
      this.isGroupsSelected = true;
    }
  }
}
