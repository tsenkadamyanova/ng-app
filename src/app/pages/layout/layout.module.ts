import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule, TranslateService, TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

const items = [
  HeaderComponent,
  MenuComponent,
  ShellComponent
];
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  declarations: items,
  exports: [
    ...items,
    TranslateModule
  ],
  providers: [
    TranslateService,
    TranslatePipe
  ]
})
export class LayoutModule { }
