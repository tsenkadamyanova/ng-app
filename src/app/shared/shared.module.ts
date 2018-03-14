import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../pages/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [],
  // providers: [
  //   TranslateService,
  //   TranslatePipe
  // ]
})
export class SharedModule { }
