import { Injectable } from '@angular/core';
import { User } from './user';
import { Roles } from './roles.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  private currentUser: User;
  /**
   * Return static users data
   *
   * @returns {Array<User>} - Array with all available users
   * @memberof UserService
   */
  getAllUsers(): Observable<any> {
    return this.http.get<User[]>('data/api/users.json');
  }

  getUser(id: number): User {
    // this.http.get<User>('data/api/user/1.json');
    const allUsers = JSON.parse(localStorage.getItem('allUsers'));

    const currentUser = allUsers.filter(item => {
      return item.id === Number(id);
    });
    return currentUser[0];
  }


  getCurrentUser(): User {
    // return empty as we don't have real request
    // return this.http.get('/api/users/' + id);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser;
  }

}
