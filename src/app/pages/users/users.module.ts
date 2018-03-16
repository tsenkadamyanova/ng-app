import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule, MatSortModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
