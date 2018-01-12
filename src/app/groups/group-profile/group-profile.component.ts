import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../../shared/groups.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Group} from "../../shared/group.model";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent implements OnInit {

  id: number;
  group = new Group(1, '', '', '', '', []);
  groups: Group[];

  constructor(private groupService: GroupsService, private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.groupService.getGroup(this.id).subscribe(data => {
            this.group = data['group'];
          });
        });
    this.groupService.getGroups().subscribe(data => {
      this.groups = data['groups'];
      console.log(this.groups);
    });
  }

  public isMember(): boolean {
    if (this.groups != null) {
      for (let g of this.groups) {
        if (this.group.id === g.id) {
          return true;
        }
      }
    }
    return false;
  }

  public leaveGroup() {

  }

}
