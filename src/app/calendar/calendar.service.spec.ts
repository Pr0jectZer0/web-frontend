import {TestBed, inject, async} from '@angular/core/testing';

import { CalendarService } from './calendar.service';
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";

describe('CalendarService', () => {
  let service: CalendarService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService,
        AuthService,
        HttpClient,
        HttpHandler,
        {provide: Router, useClass: AppRoutingModule}]
    });
    service = TestBed.get(CalendarService);
  });

  it('should be created', async(() => {
    expect(service).toBeTruthy();
  }));
  /*
    it('should get all schedules', async(()=> {
      service.getSchedules().subscribe(dates => {
        expect(dates).toEqual(
          [
          {
              "id": 12,
              "id_user": 42,
              "titel": "Vorstellung - Projekt",
              "beschreibung": "Wir stellen unser Projekt vor.",
              "start_datum": "2018-01-26 00:00:00",
              "end_datum": "2018-01-26 01:00:00",
              "created_at": "2018-01-19 08:57:55",
              "updated_at": "2018-01-21 18:51:39",
              "user": {
                  "id": 42,
                  "name": "asdf1234",
                  "alter_jahre": null,
                  "email": "a@a.de",
                  "geheimfrage": null,
                  "geheimantwort": null,
                  "created_at": "2018-01-11 09:25:45",
                  "updated_at": "2018-01-11 09:25:45"
              },
              "shared": []
          },
          {
              "id": 17,
              "id_user": 42,
              "titel": "JUNIT_TEST_TITLE",
              "beschreibung": "JUNIT_TEST_TITLE",
              "start_datum": "2018-01-30 00:00:00",
              "end_datum": "2018-01-31 00:00:00",
              "created_at": "2018-01-20 23:32:23",
              "updated_at": "2018-01-20 23:32:23",
              "user": {
                  "id": 42,
                  "name": "asdf1234",
                  "alter_jahre": null,
                  "email": "a@a.de",
                  "geheimfrage": null,
                  "geheimantwort": null,
                  "created_at": "2018-01-11 09:25:45",
                  "updated_at": "2018-01-11 09:25:45"
              },
              "shared": []
          },
          {
              "id": 22,
              "id_user": 42,
              "titel": "JUNIT_TEST_TITLE",
              "beschreibung": "JUNIT_TEST_TITLE",
              "start_datum": "2018-01-30 00:00:00",
              "end_datum": "2018-01-31 00:00:00",
              "created_at": "2018-01-20 23:36:31",
              "updated_at": "2018-01-20 23:36:31",
              "user": {
                  "id": 42,
                  "name": "asdf1234",
                  "alter_jahre": null,
                  "email": "a@a.de",
                  "geheimfrage": null,
                  "geheimantwort": null,
                  "created_at": "2018-01-11 09:25:45",
                  "updated_at": "2018-01-11 09:25:45"
              },
              "shared": []
          }
      ]);
      })
    }));

    it('should get all shared schedules', async(()=> {
      service.getSharedSchedules().subscribe(dates => {
        expect(dates).toEqual(
          [
          {
              "id": 12,
              "id_user": 42,
              "titel": "Vorstellung - Projekt",
              "beschreibung": "Wir stellen unser Projekt vor.",
              "start_datum": "2018-01-26 00:00:00",
              "end_datum": "2018-01-26 01:00:00",
              "created_at": "2018-01-19 08:57:55",
              "updated_at": "2018-01-21 18:51:39",
              "user": {
                  "id": 42,
                  "name": "asdf1234",
                  "alter_jahre": null,
                  "email": "a@a.de",
                  "geheimfrage": null,
                  "geheimantwort": null,
                  "created_at": "2018-01-11 09:25:45",
                  "updated_at": "2018-01-11 09:25:45"
              },
              "shared": []
          },
          {
              "id": 17,
              "id_user": 42,
              "titel": "JUNIT_TEST_TITLE",
              "beschreibung": "JUNIT_TEST_TITLE",
              "start_datum": "2018-01-30 00:00:00",
              "end_datum": "2018-01-31 00:00:00",
              "created_at": "2018-01-20 23:32:23",
              "updated_at": "2018-01-20 23:32:23",
              "user": {
                  "id": 42,
                  "name": "asdf1234",
                  "alter_jahre": null,
                  "email": "a@a.de",
                  "geheimfrage": null,
                  "geheimantwort": null,
                  "created_at": "2018-01-11 09:25:45",
                  "updated_at": "2018-01-11 09:25:45"
              },
              "shared": []
          },
          {
              "id": 22,
              "id_user": 42,
              "titel": "JUNIT_TEST_TITLE",
              "beschreibung": "JUNIT_TEST_TITLE",
              "start_datum": "2018-01-30 00:00:00",
              "end_datum": "2018-01-31 00:00:00",
              "created_at": "2018-01-20 23:36:31",
              "updated_at": "2018-01-20 23:36:31",
              "user": {
                  "id": 42,
                  "name": "asdf1234",
                  "alter_jahre": null,
                  "email": "a@a.de",
                  "geheimfrage": null,
                  "geheimantwort": null,
                  "created_at": "2018-01-11 09:25:45",
                  "updated_at": "2018-01-11 09:25:45"
              },
              "shared": []
          }
      ]);
      })
    }));
    */
  it('should get a schedule', async(()=> {
    service.getSchedule(12).subscribe(date => {
      expect(date).toEqual({
        "id": 12,
        "id_user": 42,
        "titel": "Vorstellung - Projekt",
        "beschreibung": "Wir stellen unser Projekt vor.",
        "start_datum": "2018-01-26 00:00:00",
        "end_datum": "2018-01-26 01:00:00",
        "created_at": "2018-01-19 08:57:55",
        "updated_at": "2018-01-21 18:51:39",
        "user": {
          "id": 42,
          "name": "asdf1234",
          "alter_jahre": null,
          "email": "a@a.de",
          "geheimfrage": null,
          "geheimantwort": null,
          "created_at": "2018-01-11 09:25:45",
          "updated_at": "2018-01-11 09:25:45"
        },
        "shared": []
      });
    })
  }));

  it('shouldn\'t get a schedule', async(()=> {
    service.getSchedule(1).subscribe(date => {
      expect(date).toEqual({
        "message": "Termin wurde nicht gefunden."
      });
    })
  }));
});
