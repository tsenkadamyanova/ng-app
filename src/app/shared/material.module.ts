import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';


const items = [
    MatButtonModule,
    MatIconModule,
    MatInputModule
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
