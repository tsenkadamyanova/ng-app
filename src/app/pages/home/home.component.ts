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

  public users: Array<User> = [];
  public dataSource: MatTableDataSource<{}>;
  public displayedColumns = ['image', 'firstname', 'lastname', 'email', 'role'];
  public selectedRowIndex = -1;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // get all users
    this.userService.getAllUsers().subscribe(users => {

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
    console.log(row);
    this.selectedRowIndex = row.id;
  }

}
