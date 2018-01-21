import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css']
})
export class ScheduleAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private services: CalendarService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'description': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'startdate': new FormControl('', Validators.required),
      'enddate': new FormControl('', Validators.required)
    });
  }

  onAdd() {
    let start = this.addForm.get('startdate').value.split('T');
    let end = this.addForm.get('enddate').value.split('T');

    if(end.length == 2 && start.length == 2) {

      let d1 = new Date(start);
      let d2 = new Date(end);
      if(d1.getTime() < d2.getTime()) {

        start = start[0] + ' ' + start[1] + ':00';
        end = end[0] + ' ' + end[1] + ':00';
        this.services.addSchedule(this.addForm.get('name').value, this.addForm.get('description').value, start, end);
      }
    }
  }

}
