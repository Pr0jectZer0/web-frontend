import {Member} from "./member.model";
import {User} from "./user.model";

export class Friendrequest {
  constructor(public id: number,
              public id_user1: number,
              public id_user2: number,
              public status: string,
              public created_at: string,
              public updated_at: string,
              public freundschaft: string,
              public user: User) {
  }
}
