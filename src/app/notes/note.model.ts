import {User} from '../shared/user.model';

export class Note{
  constructor(public id: number,
              public id_user: number,
              public titel: string,
              public text: string,
              public created_at: string,
              public updated_at: string,
              public user: User) {}
}
