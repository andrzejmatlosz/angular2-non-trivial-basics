import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ImpurPipeComponent } from './impurPipe.component';
import { TeamMembersFilter } from './teamMembersFilter.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ImpurPipeComponent, TeamMembersFilter ],
    exports: [ ImpurPipeComponent ]
})
export class ImpurPipeModule { }