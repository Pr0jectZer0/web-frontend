import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../../shared/groups.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Group} from "../../shared/group.model";
import {AuthService} from "../../auth/auth.service";
import {User} from "../../shared/user.model";
import {Member} from '../../shared/member.model';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent implements OnInit {

  id = 0;
  user: User = new User(0, '', 0, '', '', '');
  group = new Group(1, '', '', '', '', [new Member(1, 0, 0, '', '', '', this.user)]);
  groups: Group[] = [this.group];
  member = false;
  request = false;

  constructor(private groupService: GroupsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.updateGroup();
          this.requestOpen();
        });
    this.groupService.getGroups().subscribe(data => {
      this.groups = data['groups'];
    });
    this.groupService.getUser().subscribe(data => {
      this.user = data['user'];
    });
  }

  public isMember() {
    this.member = false;
    this.groupService.getGroups().subscribe((data) => {
      this.groups = data['groups'];
      for (let group of this.groups) {
        if (group.id == this.id) {
          this.member = true;
        }
      }
    });
  }

  public leaveGroup() {
    this.groupService.leaveGroup(this.id, this.user.id.toString()).subscribe(() => {
      this.updateGroup();
    });
    this.member = false;
  }

  public joinGroup() {
    if (this.request === false) {
      this.request = true;
      this.groupService.joinGroup(this.id).subscribe(() => {
          this.updateGroup();
          this.request = true;
        });
    }
  }

  public updateGroup() {
    this.groupService.getGroup(this.id).subscribe(data => {
      this.group = data['group'];
    });
    this.isMember();
    this.requestOpen();
  }

  public requestOpen() {
    this.groupService.getAllRequests(this.id).subscribe(data => {
      this.groupService.getUser().subscribe(user => {
        this.user = user['user'];
        if(data['requests'] != undefined) {
          for (let request of data['requests']) {
            if (request.id_user === this.user.id) {
              this.request = true;
            }
          }
        }
      });
    });
  }
}
