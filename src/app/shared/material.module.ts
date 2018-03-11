import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';


const items = [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
];
@NgModule({
    imports: items,
    exports: items
})
export class CustomMaterialModule {
    static forRoot(): any {
        return {
            ngModule: CustomMaterialModule
        };
    }
}
