import { Component, OnInit } from '@angular/core';
import {Note} from './note.model';
import {NotesService} from './notes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  noteName: string;

  constructor(private noteService: NotesService,
              private router: Router) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data['notes'];
    });
  }

  deleteNote(id) {
    this.noteService.deleteNote(id);
    this.notes.slice(id, 1);
  }

  noteClicked(id) {
    this.router.navigate(['/notes', id]);
  }

  createNote() {
    this.noteService.newNote(this.noteName, 'x');
    this.noteName = '';
  }
}
