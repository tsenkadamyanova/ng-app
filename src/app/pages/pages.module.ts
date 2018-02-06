import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from 'app/pages/home/home.module';

const items = [
    PageNotFoundComponent
];

@NgModule({
    imports: [
        LoginModule,
        HomeModule
    ],
    declarations: items,
    exports: items
})
export class PagesModule { }
