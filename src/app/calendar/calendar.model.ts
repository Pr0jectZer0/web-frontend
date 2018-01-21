import {User} from '../shared/user.model';

export class Calendar {
  constructor(public id: number,
              public id_user: number,
              public titel: string,
              public beschreibung: string,
              public end_datum: string,
              public start_datum: string,
              public updated_at: string,
              public created_at: string,
              public user: User) {}
}
