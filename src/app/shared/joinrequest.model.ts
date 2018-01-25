import {Member} from "./member.model";
import {User} from "./user.model";
import {Group} from "./group.model";

export class Joinrequest {
  constructor(public id: number,
              public id_user1: number,
              public id_gruppe: number,
              public rolle: string,
              public created_at: string,
              public updated_at: string,
              public user: User,
              public group: Group) {
  }
}
