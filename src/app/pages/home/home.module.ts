import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
