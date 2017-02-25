import { Component } from '@angular/core';
import { TeamMember, TeamColor } from './teamMember.model';

@Component({
    selector: 'my-pipe-example',
    templateUrl: 'app/impurPipe/impurPipe.component.html',
    styleUrls: [ 'app/impurPipe/impurPipe.component.css' ]
})
export class ImpurPipeComponent {
    public city: string = 'Poznań';
    public name: string;
    public teamMembers: Array<TeamMember> = [];
    
    addTeamMember(color: TeamColor) {
        this.teamMembers.push({
            name: this.name,
            city: this.city,
            teamColor: color
        });
    }
}
