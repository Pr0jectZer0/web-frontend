import { Component, OnInit } from '@angular/core';
import {CalendarService} from './calendar.service';
import {Calendar} from './calendar.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  addForm: FormGroup;
  isClicked = false;
  dates: Calendar[];

  constructor(private services: CalendarService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'description': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'startdate': new FormControl('', Validators.required),
      'enddate': new FormControl('', Validators.required)
    });

    this.services.getSchedules().subscribe((data) => {
      this.dates = data['dates'];
    });
  }

  onAdd() {
    let start = this.addForm.get('startdate').value.split('T');
    let end = this.addForm.get('enddate').value.split('T');

    if(end.length == 2 && start.length == 2) {

      let d1 = new Date(start);
      let d2 = new Date(end);
      if(d1.getTime() < d2.getTime()){

        start = start[0] + ' ' + start[1] + ':00';
        end = end[0] + ' ' + end[1] + ':00';
        this.services.addSchedule(this.addForm.get('name').value, this.addForm.get('description').value, start, end);
        setTimeout(() => {this.services.getSchedules().subscribe((data) => {
          this.dates = data['dates'];
          this.isClicked = false;
        })}, 250);
      }
    }
  }
}
