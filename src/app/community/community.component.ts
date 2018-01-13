import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../shared/groups.service";
import {Group} from "../shared/group.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupsService, private router: Router) {
  }

  ngOnInit() {
    this.groupService.getAllGroups().subscribe(data => {
      this.groups = data['groups'];
    });
  }

  public groupClicked(id: number) {
    this.router.navigate(['/group-profile', id]);
  }

}
