import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';
@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
