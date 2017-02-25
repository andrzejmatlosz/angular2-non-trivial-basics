import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateExampleComponent } from './templateExample.component';
import { ComplexSelectComponent } from './complex-select.component';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ TemplateExampleComponent,ComplexSelectComponent ],
    exports: [ TemplateExampleComponent ]
})
export class TemplateExampleModule { }