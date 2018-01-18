import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs/Observable";
import {Friendrequest} from "../shared/friendrequest.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  friendRequests: Friendrequest[];

  ngOnInit() {
    this.updateFriends();
    this.updateJoins();
    this.updateGroupRequests();
  }

  public accept(id: number) {
    this.http.get('https://pr0jectzer0.ml//api/friend/' + id + '/accept?token=' + this.auth.getToken()).subscribe(() => {
      this.updateFriends();
    });
  }

  public updateFriends(){
    this.http.get('https://pr0jectzer0.ml/api/friend/requests?token=' + this.auth.getToken()).subscribe(data => {
      this.friendRequests = data['requests'];
    });
  }

  public updateJoins(){

  }

  public updateGroupRequests(){

  }


}
