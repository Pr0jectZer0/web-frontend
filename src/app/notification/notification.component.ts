import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs/Observable";
import {Friendrequest} from "../shared/friendrequest.model";
import {Group} from "../shared/group.model";
import {Joinrequest} from "../shared/joinrequest.model";
import {Grouprequest} from "../shared/grouprequest.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  friendRequests: Friendrequest[];
  groups: Group[];
  joinRequests: Joinrequest[];
  groupRequests: Grouprequest[];

  ngOnInit() {
    this.updateFriends();
    this.updateGroupRequests();
    this.updateJoins();
  }

  public acceptFriend(id: number) {
    this.http.get('https://pr0jectzer0.ml//api/friend/' + id + '/accept?token=' + this.auth.getToken()).subscribe(() => {
      this.updateFriends();
    });
  }

  public declineFriend(id: number) {
    this.http.get('https://pr0jectzer0.ml//api/friend/' + id + '/decline?token=' + this.auth.getToken()).subscribe(() => {
      this.updateFriends();
    });
  }

  public updateFriends() {
    this.http.get('https://pr0jectzer0.ml/api/friend/requests?token=' + this.auth.getToken()).subscribe(data => {
      this.friendRequests = data['requests'];
    });
  }

  public updateJoins() {
    this.http.get('https://pr0jectzer0.ml/api/groups/?token=' + this.auth.getToken()).subscribe(data => {
      this.groups = data['groups'];
    });
  }

  public acceptJoin(id: number, group: number) {
    this.http.get('https://pr0jectzer0.ml/api/group/' + group + '/accept/' + id + '?token=' + this.auth.getToken()).subscribe(data => {
      this.updateJoins();
    });
  }

  public declineJoin(id: number, group: number) {
    this.http.get('https://pr0jectzer0.ml/api/group/' + group + '/decline/' + id + '?token=' + this.auth.getToken()).subscribe(data => {
      this.updateJoins();
    });
  }

  public updateGroupRequests() {
    this.http.get('https://pr0jectzer0.ml/api/user/groups/requests?token=' + this.auth.getToken()).subscribe(data => {
      this.groupRequests = data['groups'];
    });
  }

  public acceptGroup(group: number) {
    this.http.get('https://pr0jectzer0.ml/api/user/group/' + group + '/accept?token= ' + this.auth.getToken()).subscribe(data => {
        this.updateGroupRequests();
      }
    );
  }

  public declineGroup(group: number) {
    this.http.get('https://pr0jectzer0.ml/api/user/group/' + group + '/decline?token= ' + this.auth.getToken()).subscribe(data => {
        this.updateGroupRequests();
      }
    );
  }



}
