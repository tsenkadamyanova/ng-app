import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/user.service';
import { User } from '../../../core/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser(1);
    console.log(' this.user', this.user);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
