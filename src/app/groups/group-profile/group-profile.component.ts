import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../shared/groups.service";

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent implements OnInit {

  constructor(private groupService: GroupsService) { }

  ngOnInit() {
  }

}
