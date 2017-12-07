import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DisableService {
  disable = new Subject<boolean>();

  constructor() {
    this.disable.next(true);
  }
}
