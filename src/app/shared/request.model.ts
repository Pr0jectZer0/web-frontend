import {Member} from "./member.model";
import {Group} from "./group.model";

export class Request {
  constructor(public id: number,
              public id_user: number,
              public id_gruppe: number,
              public rolle: string,
              public created_at: string,
              public updated_at: string,
              public group: Group) {
  }
}
