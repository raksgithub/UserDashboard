import { Injectable } from '@angular/core';
import { Users, USERS } from './dashboard/users/users.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Users[] = USERS;

  constructor() { }

  getUsers(): Users[] {
    return this.users.slice();
  }
}
