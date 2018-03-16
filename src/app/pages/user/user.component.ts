import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/user.service';
import { User } from '../../core/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private id: number;
  public user: User;

  constructor(
    private route: ActivatedRoute,
    protected userService: UserService
  ) {
    this.route.params.subscribe( params => {
      this.user =  this.userService.getUser(params.id);
    });
  }

  ngOnInit() {
  }

}
