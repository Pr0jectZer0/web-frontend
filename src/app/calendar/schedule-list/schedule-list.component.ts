import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../calendar.service';
import {Calendar} from '../calendar.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  dates: Calendar[] = [];
  shared: Calendar[] = [];

  constructor(private services: CalendarService, private router: Router) { }

  ngOnInit() {
    this.updateSchedule();
    this.services.d.subscribe( () => {
      this.updateSchedule();
    });
  }

  updateSchedule() {
    this.services.getSchedules().subscribe((data) => {
      this.dates = data['dates'];
    });
    this.services.getSharedSchedules().subscribe(data => {
      this.shared = data['dates'];
    })
  }

  checkIfOnDates(id: number): boolean {
    for(let date of this.dates) {
      if(date.id == id) {
        return true;
      }
    }

    return false;
  }

  onNavigate() {
    this.router.navigate(['add']);
  }

  onDelete(id: number) {
    this.services.deleteSchedule(id);
  }

  onLeave(id: number) {
    this.services.leaveSchedule(id);
  }

  onEdit(id: number) {
    this.router.navigate(['/calendar/edit', id]);
  }

  onShare(id: number) {
    this.router.navigate(['/calendar/share', id]);
  }
}
