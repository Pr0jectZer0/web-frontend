import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {isEmailValid} from "../../shared/is-email-valid.directive";
import {GroupsService} from "../../shared/groups.service";

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

  createGroupForm: FormGroup;

  constructor(private groupService: GroupsService) {
  }

  ngOnInit() {
    this.createGroupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'desc': new FormControl(null, [Validators.required])
    });
  }

  onCreateGroup(form: NgForm) {
    const name = form.value.name;
    const desc = form.value.desc;
    this.groupService.createGroup(name, desc).subscribe(data => {

    });
  }

  updateGroups() {

  }

}
