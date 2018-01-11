import {User} from "./user.model";

export class GroupModule {
  constructor(public id: number,
              public name: string,
              public beschreibung: string,
              public created_at: string,
              public updated_at: string,
              public users: User[]) {
  }
}
