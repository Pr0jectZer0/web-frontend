import { Component, OnInit } from '@angular/core';
import {Calendar} from '../calendar.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CalendarService} from '../calendar.service';
import {User} from '../../shared/user.model';
import {AuthService} from '../../auth/auth.service';
import {Friend} from '../../shared/friend.model';
import {HttpClient} from '@angular/common/http';
import {UsersService} from '../../shared/users.service';

@Component({
  selector: 'app-schedule-share',
  templateUrl: './schedule-share.component.html',
  styleUrls: ['./schedule-share.component.css']
})
export class ScheduleShareComponent implements OnInit {
  set userid(event: Event) {
    this.foundedUsers = [];

    if((<HTMLInputElement>event.target).value.length >= 3) {
      for (let user of this.users) {
        if ((user.name.toLocaleLowerCase()).indexOf(((<HTMLInputElement>event.target).value).toLocaleLowerCase()) >= 0 &&
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
  _userid: number;
  users: User[];
  username: string = "";
  friends: Friend[];
  schedule: Calendar = new Calendar(0, 0, '', '', '', '', '', '', new User(0, '', 0, '', '', ''));

  constructor(private usersService: UsersService, private http: HttpClient, private auth: AuthService, private s: CalendarService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.s.getSchedule(params['id']).subscribe(data => {
        this.schedule = data['date'];
      });
    });
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
    });

    this.updateFriends();
  }

  updateFriends() {
    this.http.get<Friend[]>('https://pr0jectzer0.ml/api/friends?token=' + this.auth.getToken())
      .subscribe(data => {
        this.friends = data['friends'];
      });
  }

  weAreFriends(user: User):boolean {
    for(let friend of this.friends) {
      if(friend.friend_user.id == user.id) {
        return true;
      }
    }

    return false;
  }

  onAdd() {
    this.http.post('https://pr0jectzer0.ml/api/date/' + this.schedule.id + '/add_user?token=' + this.auth.getToken(), {
      'id': this._userid
    }).subscribe(() => {
      this.router.navigate(['/calendar']);
    });
  }
}
