import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CalendarService} from '../calendar.service';
import {Calendar} from '../calendar.model';
import {User} from '../../shared/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {
  editForm: FormGroup;
  schedule: Calendar = new Calendar(0, 0, '', '', '', '', '', '', new User(0, '', 0, '', '', ''));
  startdate: string = '';
  enddate: string = '';

  constructor(private s: CalendarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'description': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'startdate': new FormControl('', Validators.required),
      'enddate': new FormControl('', Validators.required)
    });

    this.route.params.subscribe(params => {
      this.s.getSchedule(params['id']).subscribe(data => {
        this.schedule = data['date'];

        let start = this.schedule.start_datum.split(' ');
        let end = this.schedule.end_datum.split(' ');

        this.startdate = start[0] + 'T' + start[1];
        this.enddate = end[0] + 'T' + end[1];

        this.editForm = new FormGroup({
          'name': new FormControl(this.schedule.titel, [Validators.required, Validators.minLength(3)]),
          'description': new FormControl(this.schedule.beschreibung, [Validators.required, Validators.minLength(3)]),
          'startdate': new FormControl(this.startdate, Validators.required),
          'enddate': new FormControl(this.enddate, Validators.required)
        });
      });
    });
  }

  onUpdate() {
    let start = this.editForm.get('startdate').value.split('T');
    let end = this.editForm.get('enddate').value.split('T');

    if(end.length == 2 && start.length == 2) {

      let d1 = new Date(start);
      let d2 = new Date(end);
      if(d1.getTime() < d2.getTime()) {

        start = start[0] + ' ' + start[1] + ':00';
        end = end[0] + ' ' + end[1] + ':00';
        this.s.updateSchedule(this.schedule.id, this.editForm.get('name').value, this.editForm.get('description').value, start, end);
      }
    }
  }
}
