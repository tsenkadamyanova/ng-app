import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  /**
   * Set current use to local storage
   *
   * @param {User} userData - the data for the current user which will be saved to local storage
   * @memberof AuthService
   */
  login(userData: User) {

    localStorage.setItem('currentUser', JSON.stringify(userData));

    // Use this in real project
    /*
    return this.http.post<any>('/api/authenticate', { username: userData.email, password: userData.password })
      .map((user) => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
      */
  }
  /**
   * Logout the current user
   *
   * @memberof AuthService
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') ? true : false;
  }

}
