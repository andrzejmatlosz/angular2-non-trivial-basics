import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShadowDomExampleComponent } from './shadowDomExample.component';
import { ChildComponent } from './child.component';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ ChildComponent,ShadowDomExampleComponent ],
    exports: [ ShadowDomExampleComponent ]
})
export class ShadowDomExampleModule { }