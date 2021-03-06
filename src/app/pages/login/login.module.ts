import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../core/user.service';
import { AuthService } from '../../core/auth.service';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        UserService,
        AuthService
    ]
})
export class LoginModule { }
