import {User} from './user.model';

export class Friend {
  constructor(public created_at: string,
              public freundschaft: string,
              public friend_user: User,
              public id: number,
              public id_user1: number,
              public id_user2: number,
              public status: number,
              public updated_at: string) {}
}
