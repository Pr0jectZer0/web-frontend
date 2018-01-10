import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GroupsService} from "../../shared/groups.service";

@Component({
  selector: 'app-group-memberlist',
  templateUrl: './group-memberlist.component.html',
  styleUrls: ['./group-memberlist.component.css']
})
export class GroupMemberlistComponent implements OnInit {

  id: number;

  constructor(private groupService: GroupsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        });
  }

}
