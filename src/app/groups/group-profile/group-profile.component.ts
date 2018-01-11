import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../../shared/groups.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent implements OnInit {

  id: number;

  constructor(private groupService: GroupsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.groupService.getGroup(0).subscribe(data => {
            console.log(data);
          });
        });
    this.groupService.createGroup('x', 'y');
  }

}
