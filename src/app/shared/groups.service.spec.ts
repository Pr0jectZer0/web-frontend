import {TestBed, inject, async} from '@angular/core/testing';

import { GroupsService } from './groups.service';
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

describe('GroupsService', () => {
  let service: GroupsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupsService,
        AuthService,
        HttpClient,
        HttpHandler,
        {provide: Router, useClass: AppRoutingModule}
      ]
    });
    service = TestBed.get(GroupsService)
  });

  it('should be created', async(()=> {
    expect(service).toBeTruthy();
  }));

  it('should get a group', async(()=> {
    service.getGroup(1).subscribe(group => {
      expect(group).toEqual(
        {
          "id": 1,
          "name": "xd",
          "beschreibung": "xd",
          "created_at": "2018-01-11 09:30:24",
          "updated_at": "2018-01-11 09:30:24",
          "users": [
            {
              "id": 43,
              "id_user": 42,
              "id_gruppe": 1,
              "rolle": "angefragt_gruppe",
              "created_at": "2018-01-17 17:22:56",
              "updated_at": "2018-01-17 17:22:56",
              "user": {
                "id": 42,
                "name": "asdf1234",
                "alter_jahre": null,
                "email": "a@a.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2018-01-11 09:25:45",
                "updated_at": "2018-01-11 09:25:45"
              }
            },
            {
              "id": 44,
              "id_user": 45,
              "id_gruppe": 1,
              "rolle": "angefragt_gruppe",
              "created_at": "2018-01-17 18:00:35",
              "updated_at": "2018-01-17 18:00:35",
              "user": {
                "id": 45,
                "name": "Kalli",
                "alter_jahre": null,
                "email": "c@c.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2018-01-17 17:58:55",
                "updated_at": "2018-01-17 17:58:55"
              }
            },
            {
              "id": 255,
              "id_user": 6,
              "id_gruppe": 1,
              "rolle": "angefragt_gruppe",
              "created_at": "2018-01-25 19:10:03",
              "updated_at": "2018-01-25 19:10:03",
              "user": {
                "id": 6,
                "name": "test123",
                "alter_jahre": null,
                "email": "t@t.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2017-11-30 17:45:23",
                "updated_at": "2017-11-30 17:45:23"
              }
            }
          ]
        }
      );
    })
  }));

  it('should get a group', async(()=> {
    service.getGroup(1).subscribe(group => {
      expect(group).toEqual({
        "message": "Gruppe wurde nicht gefunden."
      });
    })
  }));

  /*
  it('should get all groups from a user', async(()=> {
    service.getGroups().subscribe(groups =>
    expect(groups).toEqual(
      [
        {
          "id": 28,
          "name": "Supergruppe",
          "beschreibung": "Echt super Gruppe",
          "created_at": "2018-01-12 09:49:53",
          "updated_at": "2018-01-12 09:49:53",
          "users": [
            {
              "id": 26,
              "id_user": 21,
              "id_gruppe": 28,
              "rolle": "admin",
              "created_at": "2018-01-12 09:49:53",
              "updated_at": "2018-01-12 09:49:53",
              "user": {
                "id": 21,
                "name": "PeterPeter",
                "alter_jahre": null,
                "email": "Peter@Peter.com",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2017-12-06 18:14:38",
                "updated_at": "2017-12-06 18:14:38"
              }
            },
            {
              "id": 32,
              "id_user": 42,
              "id_gruppe": 28,
              "rolle": "mitglied",
              "created_at": "2018-01-17 12:13:39",
              "updated_at": "2018-01-25 22:13:15",
              "user": {
                "id": 42,
                "name": "asdf1234",
                "alter_jahre": null,
                "email": "a@a.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2018-01-11 09:25:45",
                "updated_at": "2018-01-11 09:25:45"
              }
            }
          ]
        },
        {
          "id": 162,
          "name": "Test",
          "beschreibung": "hasge",
          "created_at": "2018-01-21 11:51:17",
          "updated_at": "2018-01-21 11:51:17",
          "users": [
            {
              "id": 197,
              "id_user": 42,
              "id_gruppe": 162,
              "rolle": "admin",
              "created_at": "2018-01-21 11:51:17",
              "updated_at": "2018-01-21 11:51:17",
              "user": {
                "id": 42,
                "name": "asdf1234",
                "alter_jahre": null,
                "email": "a@a.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2018-01-11 09:25:45",
                "updated_at": "2018-01-11 09:25:45"
              }
            },
            {
              "id": 198,
              "id_user": 45,
              "id_gruppe": 162,
              "rolle": "mitglied",
              "created_at": "2018-01-21 11:53:35",
              "updated_at": "2018-01-21 12:03:24",
              "user": {
                "id": 45,
                "name": "Kalli",
                "alter_jahre": null,
                "email": "c@c.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2018-01-17 17:58:55",
                "updated_at": "2018-01-17 17:58:55"
              }
            }
          ]
        },
        {
          "id": 163,
          "name": "Test",
          "beschreibung": "aaa",
          "created_at": "2018-01-25 13:30:25",
          "updated_at": "2018-01-25 13:30:25",
          "users": [
            {
              "id": 202,
              "id_user": 45,
              "id_gruppe": 163,
              "rolle": "admin",
              "created_at": "2018-01-25 13:30:25",
              "updated_at": "2018-01-25 13:30:25",
              "user": {
                "id": 45,
                "name": "Kalli",
                "alter_jahre": null,
                "email": "c@c.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2018-01-17 17:58:55",
                "updated_at": "2018-01-17 17:58:55"
              }
            },
            {
              "id": 203,
              "id_user": 42,
              "id_gruppe": 163,
              "rolle": "mitglied",
              "created_at": "2018-01-25 13:30:59",
              "updated_at": "2018-01-25 13:41:28",
              "user": {
                "id": 42,
                "name": "asdf1234",
                "alter_jahre": null,
                "email": "a@a.de",
                "geheimfrage": null,
                "geheimantwort": null,
                "created_at": "2018-01-11 09:25:45",
                "updated_at": "2018-01-11 09:25:45"
              }
            }
          ]
        }
      ]
    );)
  }));
  */
  /*
    it('should show all groups', async(()=> {
      service.getAllGroups().subscribe(groups => {
        expect(groups).toEqual(
          [
            {
              "id": 1,
              "name": "xd",
              "beschreibung": "xd",
              "created_at": "2018-01-11 09:30:24",
              "updated_at": "2018-01-11 09:30:24"
            },
            {
              "id": 2,
              "name": "voluptas",
              "beschreibung": "voluptas",
              "created_at": "2018-01-11 13:44:13",
              "updated_at": "2018-01-11 13:44:13"
            },
            {
              "id": 3,
              "name": "voluptas",
              "beschreibung": "voluptas",
              "created_at": "2018-01-11 13:45:21",
              "updated_at": "2018-01-11 13:45:21"
            },
            {
              "id": 4,
              "name": "TestGruppe",
              "beschreibung": "Tolle Gruppe",
              "created_at": "2018-01-11 20:51:09",
              "updated_at": "2018-01-11 20:51:09"
            },
            {
              "id": 5,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:12:22",
              "updated_at": "2018-01-11 23:12:22"
            },
            {
              "id": 6,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:12:27",
              "updated_at": "2018-01-11 23:12:27"
            },
            {
              "id": 7,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:18:02",
              "updated_at": "2018-01-11 23:18:02"
            },
            {
              "id": 8,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:18:06",
              "updated_at": "2018-01-11 23:18:06"
            },
            {
              "id": 9,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:20:36",
              "updated_at": "2018-01-11 23:20:36"
            },
            {
              "id": 10,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:20:45",
              "updated_at": "2018-01-11 23:20:45"
            },
            {
              "id": 11,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:28:04",
              "updated_at": "2018-01-11 23:28:04"
            },
            {
              "id": 12,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:28:08",
              "updated_at": "2018-01-11 23:28:08"
            },
            {
              "id": 13,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:32:58",
              "updated_at": "2018-01-11 23:32:58"
            },
            {
              "id": 14,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:33:03",
              "updated_at": "2018-01-11 23:33:03"
            },
            {
              "id": 15,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:33:05",
              "updated_at": "2018-01-11 23:33:05"
            },
            {
              "id": 16,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-11 23:37:29",
              "updated_at": "2018-01-11 23:37:29"
            },
            {
              "id": 18,
              "name": "ffgbfgb",
              "beschreibung": "feferf",
              "created_at": "2018-01-12 02:34:30",
              "updated_at": "2018-01-12 02:34:30"
            },
            {
              "id": 19,
              "name": "gitjulienhub",
              "beschreibung": "hehe XD",
              "created_at": "2018-01-12 02:38:43",
              "updated_at": "2018-01-12 02:38:43"
            },
            {
              "id": 20,
              "name": "gitjulienhub2",
              "beschreibung": "?XD",
              "created_at": "2018-01-12 02:40:56",
              "updated_at": "2018-01-12 02:40:56"
            },
            {
              "id": 21,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-12 08:39:59",
              "updated_at": "2018-01-12 08:39:59"
            },
            {
              "id": 22,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-12 08:40:04",
              "updated_at": "2018-01-12 08:40:04"
            },
            {
              "id": 23,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-12 09:03:41",
              "updated_at": "2018-01-12 09:03:41"
            },
            {
              "id": 24,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-12 09:03:49",
              "updated_at": "2018-01-12 09:03:49"
            },
            {
              "id": 25,
              "name": "Pingpong",
              "beschreibung": "gitjulienhub",
              "created_at": "2018-01-12 09:41:56",
              "updated_at": "2018-01-12 09:41:56"
            },
            {
              "id": 26,
              "name": "ziemlichgutegruppe",
              "beschreibung": "?XD",
              "created_at": "2018-01-12 09:44:41",
              "updated_at": "2018-01-12 09:44:41"
            },
            {
              "id": 27,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-12 09:49:44",
              "updated_at": "2018-01-12 09:49:44"
            },
            {
              "id": 28,
              "name": "Supergruppe",
              "beschreibung": "Echt super Gruppe",
              "created_at": "2018-01-12 09:49:53",
              "updated_at": "2018-01-12 09:49:53"
            },
            {
              "id": 29,
              "name": "eskimo",
              "beschreibung": "antarktis",
              "created_at": "2018-01-12 09:54:47",
              "updated_at": "2018-01-12 09:54:47"
            },
            {
              "id": 30,
              "name": "Test Gruppe",
              "beschreibung": "Miau",
              "created_at": "2018-01-12 15:26:38",
              "updated_at": "2018-01-12 15:26:38"
            },
            {
              "id": 31,
              "name": "Möppes",
              "beschreibung": "Möppesse",
              "created_at": "2018-01-12 21:08:33",
              "updated_at": "2018-01-12 21:08:33"
            },
            {
              "id": 32,
              "name": "Test1234",
              "beschreibung": "1234",
              "created_at": "2018-01-15 18:30:23",
              "updated_at": "2018-01-15 18:30:23"
            },
            {
              "id": 33,
              "name": "Gruppe Zum Verlassen",
              "beschreibung": "ashdasdas",
              "created_at": "2018-01-17 11:56:51",
              "updated_at": "2018-01-17 11:56:51"
            },
            {
              "id": 34,
              "name": "Weitere Gruppe zum Verlassen",
              "beschreibung": "teajkas",
              "created_at": "2018-01-17 13:42:48",
              "updated_at": "2018-01-17 13:42:48"
            },
            {
              "id": 35,
              "name": "oidsohsdfds",
              "beschreibung": "asd",
              "created_at": "2018-01-17 13:45:00",
              "updated_at": "2018-01-17 13:45:00"
            },
            {
              "id": 36,
              "name": "asda",
              "beschreibung": "sd",
              "created_at": "2018-01-17 14:36:44",
              "updated_at": "2018-01-17 14:36:44"
            },
            {
              "id": 37,
              "name": "Ujspaoidckjehe",
              "beschreibung": "asdwf",
              "created_at": "2018-01-17 15:34:53",
              "updated_at": "2018-01-17 15:34:53"
            },
            {
              "id": 38,
              "name": "aa",
              "beschreibung": "a",
              "created_at": "2018-01-17 15:37:11",
              "updated_at": "2018-01-17 15:37:11"
            },
            {
              "id": 40,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 17:01:29",
              "updated_at": "2018-01-20 17:01:29"
            },
            {
              "id": 41,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 17:03:30",
              "updated_at": "2018-01-20 17:03:30"
            },
            {
              "id": 54,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 17:47:47",
              "updated_at": "2018-01-20 17:47:47"
            },
            {
              "id": 55,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 17:47:48",
              "updated_at": "2018-01-20 17:47:48"
            },
            {
              "id": 56,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 17:47:48",
              "updated_at": "2018-01-20 17:47:48"
            },
            {
              "id": 57,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 18:07:35",
              "updated_at": "2018-01-20 18:07:35"
            },
            {
              "id": 58,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 18:07:35",
              "updated_at": "2018-01-20 18:07:35"
            },
            {
              "id": 59,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 18:07:36",
              "updated_at": "2018-01-20 18:07:36"
            },
            {
              "id": 71,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 19:09:40",
              "updated_at": "2018-01-20 19:09:40"
            },
            {
              "id": 73,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 19:09:42",
              "updated_at": "2018-01-20 19:09:42"
            },
            {
              "id": 76,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 19:09:55",
              "updated_at": "2018-01-20 19:09:55"
            },
            {
              "id": 78,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 19:09:57",
              "updated_at": "2018-01-20 19:09:57"
            },
            {
              "id": 89,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 20:12:49",
              "updated_at": "2018-01-20 20:12:49"
            },
            {
              "id": 95,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 20:15:20",
              "updated_at": "2018-01-20 20:15:20"
            },
            {
              "id": 101,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 20:15:36",
              "updated_at": "2018-01-20 20:15:36"
            },
            {
              "id": 107,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 20:16:20",
              "updated_at": "2018-01-20 20:16:20"
            },
            {
              "id": 124,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 20:23:56",
              "updated_at": "2018-01-20 20:23:56"
            },
            {
              "id": 131,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 20:27:40",
              "updated_at": "2018-01-20 20:27:40"
            },
            {
              "id": 138,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 20:28:53",
              "updated_at": "2018-01-20 20:28:53"
            },
            {
              "id": 145,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-20 22:01:13",
              "updated_at": "2018-01-20 22:01:13"
            },
            {
              "id": 162,
              "name": "Test",
              "beschreibung": "hasge",
              "created_at": "2018-01-21 11:51:17",
              "updated_at": "2018-01-21 11:51:17"
            },
            {
              "id": 163,
              "name": "Test",
              "beschreibung": "aaa",
              "created_at": "2018-01-25 13:30:25",
              "updated_at": "2018-01-25 13:30:25"
            },
            {
              "id": 164,
              "name": "Coole Gruppe",
              "beschreibung": "Echt coole Gruppe",
              "created_at": "2018-01-25 16:56:50",
              "updated_at": "2018-01-25 16:56:50"
            },
            {
              "id": 205,
              "name": "saD",
              "beschreibung": "SAdsaD",
              "created_at": "2018-01-25 19:25:02",
              "updated_at": "2018-01-25 19:25:02"
            },
            {
              "id": 206,
              "name": "saD",
              "beschreibung": "SAdsaD",
              "created_at": "2018-01-25 19:25:04",
              "updated_at": "2018-01-25 19:25:04"
            },
            {
              "id": 207,
              "name": "saD",
              "beschreibung": "SAdsaD",
              "created_at": "2018-01-25 19:25:06",
              "updated_at": "2018-01-25 19:25:06"
            },
            {
              "id": 208,
              "name": "dsafasf",
              "beschreibung": "asdfsdf",
              "created_at": "2018-01-25 19:35:46",
              "updated_at": "2018-01-25 19:35:46"
            },
            {
              "id": 209,
              "name": "dsafasf",
              "beschreibung": "asdfsdf",
              "created_at": "2018-01-25 19:35:50",
              "updated_at": "2018-01-25 19:35:50"
            },
            {
              "id": 226,
              "name": "Petergruppe",
              "beschreibung": "Das ist eine coole Gruppe",
              "created_at": "2018-01-25 22:46:40",
              "updated_at": "2018-01-25 22:46:40"
            },
            {
              "id": 227,
              "name": "NochMehrPeter",
              "beschreibung": "YEA PETER IN THE HOUSE",
              "created_at": "2018-01-25 22:48:22",
              "updated_at": "2018-01-25 22:48:22"
            },
            {
              "id": 228,
              "name": "Superpeterer",
              "beschreibung": "Gfsdfgsgfasfg",
              "created_at": "2018-01-25 22:50:24",
              "updated_at": "2018-01-25 22:50:24"
            },
            {
              "id": 229,
              "name": "Test",
              "beschreibung": "test",
              "created_at": "2018-01-25 22:59:10",
              "updated_at": "2018-01-25 22:59:10"
            },
            {
              "id": 230,
              "name": "fhgdjdfg",
              "beschreibung": "dfhgdfgjdhfjghjg",
              "created_at": "2018-01-25 23:12:40",
              "updated_at": "2018-01-25 23:12:40"
            },
            {
              "id": 234,
              "name": "JUNIT_TEST",
              "beschreibung": "JUNIT_TEST",
              "created_at": "2018-01-26 01:19:10",
              "updated_at": "2018-01-26 01:19:10"
            }
          ]
        )
      })
    }));
    */
});
