import {User} from "./user.model";

export class Member {
  constructor(public id: number,
              public id_user: number,
              public rolle: string,
              public created_at: string,
              public updated_at: string,
              public user: User) {
  }
}
