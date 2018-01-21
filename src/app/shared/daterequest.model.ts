import {Member} from "./member.model";
import {User} from "./user.model";
import {Group} from "./group.model";
import {Calendar} from "../calendar/calendar.model";

export class Daterequest {
  constructor(public id: number,
              public id_user: number,
              public titel: string,
              public beschreibung: string,
              public start_datum: string,
              public end_datum: string,
              public created_at: string,
              public updated_at: string) {
  }
}
