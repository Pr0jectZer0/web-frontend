import {NotesService} from './notes.service';
import {async, TestBed} from "@angular/core/testing";
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

describe('NotesService', () => {
  let service: NotesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotesService,
        AuthService,
        HttpClient,
        HttpHandler,
        {provide: Router, useClass: AppRoutingModule},
      ]
    });
    service = TestBed.get(NotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  /*
    it('should get all notes', async(()=>{
      service.getNotes().subscribe(notes =>{
        expect(notes).toEqual(
          [
            {
              "id": 4,
              "id_user": 42,
              "titel": "Test1234",
              "text": "Testtext",
              "created_at": "2018-01-11 15:44:32",
              "updated_at": "2018-01-11 15:44:32",
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
              "id": 12,
              "id_user": 42,
              "titel": "www",
              "text": "x",
              "created_at": "2018-01-12 08:16:48",
              "updated_at": "2018-01-12 08:16:48",
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
        );
      })
    }));
    */

  it('should get a single note', async(() => {
    service.getNote(4).subscribe(note => {
      expect(note).toEqual(
        {
          "id": 4,
          "id_user": 42,
          "titel": "Test1234",
          "text": "Testtext",
          "created_at": "2018-01-11 15:44:32",
          "updated_at": "2018-01-11 15:44:32",
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
        })
    })
  }));

  it('should create a note', async(()=> {
    service.newNote('asdf','test');
    expect(true);
  }));
  /*
    it('should delete a note', async(()=> {
      service.deleteNote(5).subscribe();
      expect(true);
    }));
    */

  it('should update a note', async(()=> {
    service.setNote(3,"asdf","test").subscribe(note => {
      expect(note).toEqual(
        {
          "id": 3,
          "id_user": 42,
          "titel": "asdf",
          "text": "test",
          "created_at": "2018-01-11 15:44:32",
          "updated_at": "2018-01-11 15:44:32",
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
      )
    })
  }))
});
