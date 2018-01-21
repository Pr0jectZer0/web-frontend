import { Component, OnInit } from '@angular/core';
import {CalendarService} from './calendar.service';
import {Calendar} from './calendar.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateModel} from '../shared/datemodel.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  addForm: FormGroup;
  editForm: FormGroup;
  isClicked = false;
  dates: Calendar[] = [];
  date: DateModel;
  today: Date;
  calendarWeeks: { weekday: number, day: number, month: number, year: number }[][];

  constructor(private services: CalendarService) { }

  ngOnInit() {
    this.date = new DateModel(Date.now());
    this.today = new Date(Date.now());
    this.addForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'description': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'startdate': new FormControl('', Validators.required),
      'enddate': new FormControl('', Validators.required)
    });

    this.editForm = new FormGroup({
      'n': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'd': new FormControl('', [Validators.required, Validators.minLength(3)]),
      's': new FormControl('', Validators.required),
      'e': new FormControl('', Validators.required)
    });

    this.updateSchedule();

    this.calendarWeeks = this.date.getCalendarWeek();
  }

  updateSchedule() {
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

  swipeMonth(direction: number) {
    let month = this.date.date.getMonth();
    let year = this.date.getYear();

    if(!direction) {
      if(month == 0) {
        year--;
        month = 11;
      } else {
        month--;
      }

      this.date = new DateModel(new Date(year, month, 1).getTime());
      this.calendarWeeks = this.date.getCalendarWeek();
    } else {
      if(month == 11) {
        year++;
        month = 0;
      } else {
        month++;
      }

      this.date = new DateModel(new Date(year, month, 1).getTime());
      this.calendarWeeks = this.date.getCalendarWeek();
    }
  }

  haveAdate(day: number, month: number, year: number): boolean {
    if(day != 0) {
      for (let date of this.dates) {
        let d = date.start_datum.split('-');
        let tmp = d[2].split(' ');

        if (parseInt(d[0]) == year && parseInt(d[1]) == month+1 && parseInt(tmp[0]) == day) {
          return true;
        }
      }
    }

    return false;
  }

  onDelete(id: number) {
    this.services.deleteSchedule(id);
    setTimeout(() => {
      this.updateSchedule();
    }, 250);
  }
}
