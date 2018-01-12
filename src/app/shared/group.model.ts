import {Member} from "./member.model";

export class Group {
  constructor(public id: number,
              public name: string,
              public beschreibung: string,
              public created_at: string,
              public updated_at: string,
              public users: Member[]) {
  }
}
