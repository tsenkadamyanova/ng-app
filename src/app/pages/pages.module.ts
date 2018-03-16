import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { UserService } from '../core/user.service';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';

const items = [
    PageNotFoundComponent
];

@NgModule({
    imports: [
        LoginModule,
        HomeModule,
        UserModule,
        UsersModule
    ],
    declarations: items,
    exports: items
})
export class PagesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PagesModule,
            providers: [
                TranslateService,
                TranslatePipe,
                UserService
            ]
        };
    }
}
