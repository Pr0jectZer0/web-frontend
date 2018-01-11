import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GroupsService} from "../../shared/groups.service";
import {GroupModule} from "../../shared/group.module";
import {Member} from "../../shared/member.model";

@Component({
  selector: 'app-group-memberlist',
  templateUrl: './group-memberlist.component.html',
  styleUrls: ['./group-memberlist.component.css']
})
export class GroupMemberlistComponent implements OnInit {

  id: number;
  group = new GroupModule(0, '', '', '', '', []);
  users: Member[];

  constructor(private groupService: GroupsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.groupService.getGroup(this.id).subscribe(data => {
            this.group = data['group'];
            this.users = this.group.users;
          });
        });
  }

}
