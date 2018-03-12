import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../../shared/animations/animations';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../core/user';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  // host: { '[@fadeInAnimation]': '' },
})
export class LoginComponent implements OnInit {
  constructor(
    protected userService: UserService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  public hidePassword = true; // used to show or hide the password as text
  public loginForm: FormGroup;
  public users: Array<User> = [];

  public get email() { return this.loginForm.get('email'); }

  public get password() { return this.loginForm.get('password'); }

  private currentUser: User | null;


  public ngOnInit(): void {
    // console.log(this.loginForm.controls);
    this.userService.getAllUsers().subscribe(users => {
      console.log('we have all users here: ', users);
      this.users = users;
    });
  }
  public login(): void {
    this.currentUser = this.checkEmailAndPass(this.users, this.email.value, this.password.value);
    console.log('current user is : ', this.currentUser);
  }

  /**
   * Create login form with fields
   * email field
   * passord field
   * @memberof LoginComponent
   */
  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  checkEmailAndPass(allUsers: Array<User>, email: string, password: string): any {
    // get the user by email and pass
    const currentUser = allUsers.find(myUser => {
      return myUser.email === email && myUser.password === password;
    });

    return currentUser || null;
  }


}
