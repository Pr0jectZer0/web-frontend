import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {isEmailValid} from "../../shared/is-email-valid.directive";

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

  createGroupForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.createGroupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'desc': new FormControl(null, [Validators.required])
    });
  }

  onCreateGroup(form: NgForm) {

  }

}
