import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../core/user';
import { MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from '../../core/user.service';
import { Roles } from '../../core/roles.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];
  public dataSource: MatTableDataSource<{}>;
  public displayedColumns = ['image', 'firstname', 'lastname', 'email', 'role'];
  public selectedRowIndex = -1;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // get all users
    this.userService.getAllUsers().subscribe(users => {
      // save users to local storage
      localStorage.setItem('allUsers', JSON.stringify(users));
      this.users = users;
      // replace the role value in the array
      const usersUpdated: Array<User> = this.users.map(item => {
        item.role = Roles[item.role];
        return item;
      });
      // make data sortable
      this.dataSource = new MatTableDataSource(usersUpdated as Array<User>);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  openUser(row) {
    this.selectedRowIndex = row.id;
    this.router.navigate(['/user', row.id]);
  }

}
