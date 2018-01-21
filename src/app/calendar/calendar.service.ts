import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Calendar} from './calendar.model';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CalendarService {
  d = new Subject<boolean>();

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
    this.d.next(false);
  }

  getSchedules(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>('https://pr0jectzer0.ml/api/dates/?token=' + this.auth.getToken());
  }

  addSchedule(title: string, description: string, start: string, end: string) {
    this.http.post('https://pr0jectzer0.ml/api/date/?token=' + this.auth.getToken(), {
      'titel': title,
      'beschreibung': description,
      'end_datum': end,
      'start_datum': start
    }).subscribe( data => {
      this.d.next(true);
      this.router.navigate(['/calendar']);
    });
  }

  updateSchedule(id: number, title: string, description: string, start: string, end: string) {
    this.http.put('https://pr0jectzer0.ml/api/date/' + id + '?token=' + this.auth.getToken(), {
      'titel': title,
      'beschreibung': description,
      'end_datum': end,
      'start_datum': start
    }).subscribe( data => {
      this.d.next(true);
      this.router.navigate(['/calendar']);
    });
  }

  deleteSchedule(id: number) {
    this.http.delete('https://pr0jectzer0.ml/api/date/' + id + '?token=' + this.auth.getToken()).subscribe(data => {
      this.d.next(true);
    });
  }

  getSchedule(id: number): Observable<Calendar> {
    return this.http.get<Calendar>('https://pr0jectzer0.ml/api/date/' + id + '?token=' + this.auth.getToken());
  }
}
