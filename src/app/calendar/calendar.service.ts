import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Calendar} from './calendar.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class CalendarService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getSchedules(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>('https://pr0jectzer0.ml/api/dates/?token=' + this.auth.getToken());
  }

  addSchedule(title: string, description: string, start: string, end: string) {
    this.http.post('https://pr0jectzer0.ml/api/date/?token=' + this.auth.getToken(), {
      'titel': title,
      'beschreibung': description,
      'end_datum': end,
      'start_datum': start
    }).subscribe();
  }
}
