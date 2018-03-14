import { Component, OnInit } from '@angular/core';
import { Roles } from '../../../core/roles.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public items = [];

  ngOnInit() {
    this.generateMenuItems();
  }
  /**
   * Generate menu items from current roles
   *
   * @private
   * @memberof MenuComponent
   */
  private generateMenuItems() {
    for (const role in Roles) {
      if (isNaN(Number(role))) {
        this.items.push(role);
      }

    }
  }

}
