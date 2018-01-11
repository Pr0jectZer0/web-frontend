import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Note} from './note.model';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class NotesService {

  constructor(private auth: AuthService,
              private http: HttpClient,
              private router: Router) { }

  public getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('https://pr0jectzer0.ml/api/notes?token=' + this.auth.getToken());
  }

  public newNote(name: string, text: string) {
    this.http.post("https://pr0jectzer0.ml/api/note?token=" + this.auth.getToken(),
      {'titel': name, 'text': text})
      .subscribe(
        data => {
          this.router.navigate(['/notes', data['id']]);
        }
      );
  }

  public deleteNote(id: number) {
    this.http.delete("https://pr0jectzer0.ml/api/note/" + id + "?token=" + this.auth.getToken());
  }
}

