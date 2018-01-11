import { Component, OnInit } from '@angular/core';
import {Note} from '../note.model';
import {NotesService} from '../notes.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  editName: boolean = false;
  editText: boolean = false;
  oldName: string = '';
  oldText: string = '';
  note: Note = new Note(0, 0, '', '', '', '', new User(0, '', 0, '', '', ''));

  constructor(private notesService: NotesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateNote();
  }

  updateNote() {
    this.route.params.subscribe(params => {
      this.notesService.getNote(params['id']).subscribe((data) => {
        this.note = data['note'];
        this.oldName = this.note.titel;
        this.oldText = this.note.text;
      });
    });
  }

  onUpdateName() {
    if(this.note.titel != this.oldName) {
      this.notesService.setNote(this.note.id, this.note.titel, this.note.text).subscribe(() => {
        this.updateNote();
      });
    }

    this.editName = false;
  }

  onUpdateText() {
    if(this.note.text != this.oldText) {
      this.notesService.setNote(this.note.id, this.note.titel, this.note.text).subscribe(() => {
        this.updateNote();
      });
    }

    this.editText = false;
  }
}
