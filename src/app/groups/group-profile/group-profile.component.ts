import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../../shared/groups.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Group} from "../../shared/group.model";
import {AuthService} from "../../auth/auth.service";
import {User} from "../../shared/user.model";

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent implements OnInit {

  id = 0;
  group = new Group(1, '', '', '', '', []);
  groups: Group[];
  user: User;
  member = false;

  constructor(private groupService: GroupsService, private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.updateGroup();
        });
    this.groupService.getGroups().subscribe(data => {
      this.groups = data['groups'];
    });
    this.groupService.getUser().subscribe(data => {
      this.user = data['user'];
    });
  }

  public isMember() {
  }

  public leaveGroup() {
    this.groupService.leaveGroup(this.id, this.user.id.toString()).subscribe(data => {
      this.updateGroup();
    });
  }

  public joinGroup() {
    this.groupService.joinGroup(this.id).subscribe(data => {
      this.updateGroup();
    });
  }

  public updateGroup() {
    this.groupService.getGroup(this.id).subscribe(data => {
      this.group = data['group'];
    });
    this.isMember();
  }
}
