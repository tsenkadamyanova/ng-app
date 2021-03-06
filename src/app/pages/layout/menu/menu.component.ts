import { Component, OnInit } from '@angular/core';
import { Roles } from '../../../core/roles.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public items = [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'Users',
      url: '/users',
    }
  ];

  ngOnInit() {
    this.generateMenuItems();
  }
  /**
   * Generate menu items from current
   *
   * @private
   * @memberof MenuComponent
   */
  private generateMenuItems() {

  }

}
