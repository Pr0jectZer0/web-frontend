import {TestBed, inject, async} from '@angular/core/testing';

import {LibraryService} from './library.service';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {AuthService} from "../auth/auth.service";

describe('LibraryService', () => {
  let service: LibraryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LibraryService,
        AuthService,
        HttpClient,
        HttpHandler,
        {provide: Router, useClass: AppRoutingModule}]
    });
    service = TestBed.get(LibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find game one', async(() => {
    service.getGame(1).subscribe(game => {
      expect(game).toEqual(
        {
          "id": 1,
          "id_genre": 1,
          "id_publisher": 1,
          "name": "TestSpiel01",
          "beschreibung": "Description TestSpiel01",
          "created_at": "2017-12-07 19:01:52",
          "updated_at": "2017-12-07 19:01:52"
        }
      );
    });
  }));

  it('shouldn\'t find game 300000', async(() => {
    service.getGame(300000).subscribe(message => {
      expect(message).toEqual(
        {
          "message": "Spiel wurde nicht gefunden",
        }
      );
    });
  }));

  it('should find all genres', async(() => {
    service.getGenres().subscribe(Genre => {
      expect(Genre).toEqual(
        [
          {
            "id": 1,
            "name": "Pr0ject Zer0",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 2,
            "name": "Electronic Arts",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 3,
            "name": "Square Enix",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 4,
            "name": "Nintendo",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 5,
            "name": "Sony",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 6,
            "name": "Ubisoft",
            "created_at": null,
            "updated_at": null
          }
        ]
      );
    });
  }));

  it('should find all publisher', async(() => {
    service.getPublisher().subscribe(publisher => {
      expect(publisher).toEqual(
        [
          {
            "id": 1,
            "name": "Pr0ject Zer0",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 2,
            "name": "Electronic Arts",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 3,
            "name": "Square Enix",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 4,
            "name": "Nintendo",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 5,
            "name": "Sony",
            "created_at": null,
            "updated_at": null
          },
          {
            "id": 6,
            "name": "Ubisoft",
            "created_at": null,
            "updated_at": null
          }
        ]
      );
    });
  }));

  it('should find all games off that account', async(() => {
    service.getGames().subscribe(games => {
      expect(games).toEqual(
        [
          {
            "id": 1,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "TestSpiel01",
            "beschreibung": "Description TestSpiel01",
            "created_at": "2017-12-07 19:01:52",
            "updated_at": "2017-12-07 19:01:52"
          },
          {
            "id": 2,
            "id_genre": 2,
            "id_publisher": 1,
            "name": "TestSpiel02",
            "beschreibung": "Description TestSpiel02",
            "created_at": "2017-12-07 19:02:14",
            "updated_at": "2017-12-07 19:02:14"
          },
          {
            "id": 19,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "tests535234",
            "beschreibung": "347z3grhajdfasd",
            "created_at": "2018-01-20 21:37:04",
            "updated_at": "2018-01-20 21:37:04"
          },
          {
            "id": 20,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "JUNIT_TEST",
            "beschreibung": "JUNIT_TEST",
            "created_at": "2018-01-20 21:38:16",
            "updated_at": "2018-01-20 21:38:16"
          },
          {
            "id": 26,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME_",
            "beschreibung": "UNIT_TEST_GAME_",
            "created_at": "2018-01-20 21:40:46",
            "updated_at": "2018-01-20 21:40:46"
          },
          {
            "id": 27,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME",
            "beschreibung": "UNIT_TEST_GAME",
            "created_at": "2018-01-20 21:40:46",
            "updated_at": "2018-01-20 21:40:46"
          },
          {
            "id": 29,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME_",
            "beschreibung": "UNIT_TEST_GAME_",
            "created_at": "2018-01-20 21:41:19",
            "updated_at": "2018-01-20 21:41:19"
          },
          {
            "id": 30,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME",
            "beschreibung": "UNIT_TEST_GAME",
            "created_at": "2018-01-20 21:41:19",
            "updated_at": "2018-01-20 21:41:19"
          },
          {
            "id": 32,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME_",
            "beschreibung": "UNIT_TEST_GAME_",
            "created_at": "2018-01-20 21:41:41",
            "updated_at": "2018-01-20 21:41:41"
          },
          {
            "id": 33,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME",
            "beschreibung": "UNIT_TEST_GAME",
            "created_at": "2018-01-20 21:41:41",
            "updated_at": "2018-01-20 21:41:41"
          },
          {
            "id": 36,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME",
            "beschreibung": "UNIT_TEST_GAME",
            "created_at": "2018-01-20 21:42:00",
            "updated_at": "2018-01-20 21:42:00"
          },
          {
            "id": 39,
            "id_genre": 1,
            "id_publisher": 1,
            "name": "UNIT_TEST_GAME",
            "beschreibung": "UNIT_TEST_GAME",
            "created_at": "2018-01-20 21:44:34",
            "updated_at": "2018-01-20 21:44:34"
          }
        ]
      );
    });
  }));
});
