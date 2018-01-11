import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../../shared/groups.service";
import {ActivatedRoute, Params} from "@angular/router";
import {GroupModule} from "../../shared/group.module";

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent implements OnInit {

  id: number;
  group: GroupModule;

  constructor(private groupService: GroupsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.groupService.getGroup(0).subscribe(data => {
            this.group = data;
          });
        });
  }

}
