import { Component, OnInit } from '@angular/core';
import { DisableService } from '../shared/disable.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/user.model';
import {UsersService} from '../shared/users.service';
import {Router} from '@angular/router';
import {GroupsService} from "../shared/groups.service";
import {GroupModule} from "../shared/group.module";

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css'],
  animations: [
    trigger('bodyState', [
      state('closed', style({height: '40px', backgroundColor: '#FFFFFF'})),
      state('opened', style({height: 'calc(100% - 58px)'})),
      transition('closed <=> opened', [
        animate(350)
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

  set userid(event: Event) {
    this.foundedUsers = [];

    if((<HTMLInputElement>event.target).value.length >= 3) {
      for (let user of this.users) {
        if ((user.name.toLocaleLowerCase()).indexOf(((<HTMLInputElement>event.target).value).toLocaleLowerCase()) >= 0 &&
          this.friends.indexOf(user) < 0 &&
          this.foundedUsers.length <= 8 &&
          user.id != this.auth.getID() &&
          !this.weAreFriends(user)) {
          this.foundedUsers.push(user);
        }
      }

      this.auth.getID();
    }
  }

  foundedUsers: User[] = [];
  friends: User[];
  _userid: number;
  username: string = "";
  body: string = 'in';
  state: string = 'closed';
  error: string = 'Freund hinzufügen';
  isFriendsSelected: boolean = true;
  isGroupsSelected: boolean = false;
  users: User[];

  constructor(private disableService: DisableService,
              private http: HttpClient,
              private auth: AuthService,
              private usersService: UsersService,
              private router: Router,
              private groupService: GroupsService) {
  }

  ngOnInit() {
    this.disableService.disable.subscribe(
      data => {
        if(data) {
          this.state = 'closed';
        }
      }
    );

    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
    });

    this.updateFriends();
  }

  onClicked() {
    if(this.state == 'closed') {
      this.state = 'opened';
    }
  }

  addFriend() {
    this.http.post('https://pr0jectzer0.ml/api/friend/add?token=' + this.auth.getToken(), {'id': this._userid})
      .subscribe(
        () => {
          this.updateFriends();
          this.username = "";
          this.foundedUsers = [];
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

  openChat(id: number) {
    this.http.get('https://pr0jectzer0.ml/api/chatroom/' + id + '?token=' + this.auth.getToken()).subscribe(
      data => {
        this.router.navigate(['/chat', data['chatroom']], );
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

  weAreFriends(user: User):boolean {
    for(let friend of this.friends) {
      if(friend.id == user.id) {
        return true;
      }
    }

    return false;
  }
}
