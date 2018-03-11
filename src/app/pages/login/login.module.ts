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
@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        TranslateModule,
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        UserService
    ]
})
export class LoginModule { }
