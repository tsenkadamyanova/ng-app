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
        TranslateModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
