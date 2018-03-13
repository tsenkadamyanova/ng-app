import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/auth.guard';


const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [
            AuthGuard
        ]
    },
    { path: '', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
