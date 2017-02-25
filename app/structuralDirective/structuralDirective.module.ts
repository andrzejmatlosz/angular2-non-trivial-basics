import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { StructuralDirectiveComponent } from './structuralDirective.component';
import { AnyDirective } from './any.directive';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ StructuralDirectiveComponent, AnyDirective ],
    exports: [ StructuralDirectiveComponent ]
})
export class StructuralDirectiveModule { }