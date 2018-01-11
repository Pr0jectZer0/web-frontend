import { Component, OnInit } from '@angular/core';
import {Note} from './note.model';
import {NotesService} from '../shared/notes.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(private noteService: NotesService) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data['notes'];
    });
  }
}
