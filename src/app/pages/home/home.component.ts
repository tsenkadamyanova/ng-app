import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../core/user.service';
import { User } from '../../core/user';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Roles } from '../../core/roles.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

  }



}
