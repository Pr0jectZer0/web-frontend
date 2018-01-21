import { Component, OnInit } from '@angular/core';
import {CalendarService} from './calendar.service';
import {Calendar} from './calendar.model';
import {DateModel} from '../shared/datemodel.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dates: Calendar[] = [];
  shared: Calendar[] = [];
  date: DateModel;
  today: Date;
  calendarWeeks: { weekday: number, day: number, month: number, year: number }[][];

  constructor(private services: CalendarService) { }

  ngOnInit() {
    this.date = new DateModel(Date.now());
    this.today = new Date(Date.now());

    this.updateSchedule();
    this.services.d.subscribe(data => {
      this.updateSchedule();
    });
    this.services.getSharedSchedules().subscribe(data => {
      this.shared = data['dates'];
    });

    this.calendarWeeks = this.date.getCalendarWeek();
  }

  updateSchedule() {
    this.services.getSchedules().subscribe((data) => {
      this.dates = data['dates'];
    });
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

  haveAshared(day: number, month: number, year: number): boolean {
    if(day != 0) {
      for (let date of this.shared) {
        let d = date.start_datum.split('-');
        let tmp = d[2].split(' ');

        if (parseInt(d[0]) == year && parseInt(d[1]) == month+1 && parseInt(tmp[0]) == day && !this.haveAdate(day, month, year)) {
          return true;
        }
      }
    }

    return false;
  }
}
