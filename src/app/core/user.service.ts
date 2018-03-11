import { Injectable } from '@angular/core';
import { User } from './user';
import { Roles } from './roles.enum';

export const USERS: User[] = [
  {
    id: 1,
    email: 'tobias.kief@me.com',
    password: '123456',
    firstName: 'Tobias',
    lastName: 'Kiefer',
    role: Roles.user,
    image: 'tobias_50x50.jpg'
  },
  {
    id: 2,
    email: 'nina@cim.it',
    password: '123456',
    firstName: 'Nina',
    lastName: 'Pagon',
    role: Roles.user,
    image: 'nina_50x50.jpg'
  },
  {
    id: 3,
    email: 'admin@admin.com',
    password: 'dontknow',
    firstName: 'John',
    lastName: 'Snow',
    role: Roles.administrator,
    image: 'string'
  },
  {
    id: 4,
    email: 'anotheruser@user.com',
    password: 'dontknow',
    firstName: 'string',
    lastName: 'string',
    role: Roles.user,
    image: 'string'
  },
  {
    id: 5,
    email: 'admin2@ad.com',
    password: '12134',
    firstName: 'string',
    lastName: 'string',
    role: Roles.administrator,
    image: 'string'
  }
];


@Injectable()
export class UserService {
  /**
   * Return static users data
   *
   * @returns {Array<User>} - Array with all available users
   * @memberof UserService
   */
  getAllUsers(): Array<User> {
    return USERS;
  }


  getCurrentUser(id: number): User {

    return USERS.find(user => user.id === id);
  }

  checkEmailAndPass(email: string, password: string): any {
    // get the user by email and pass
    const currentUser = USERS.find(myUser => {
      return myUser.email === email && myUser.password === password;
    });

    return currentUser || null;
  }


}
