import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'my-directive-example',
    templateUrl: 'app/structuralDirective/structuralDirective.component.html',
    styleUrls: [ 'app/structuralDirective/structuralDirective.component.css' ],
    providers: [ SpinnerService ]
})
export class StructuralDirectiveComponent {

    public ifCondition: boolean= false;

    public condition1: boolean= false;
    public condition2: boolean= false;
    public condition3: boolean= false;
    public conidtionsArray: Array<boolean> = [];
    
    constructor (private spinnerService: SpinnerService) {
        // setTimeout(() => { spinnerService.informSpinnerService(false); }, 2000);
    }

    refreshConditionsArray() {
        this.conidtionsArray = [ this.condition1, this.condition2, this.condition3 ];
    }
}
