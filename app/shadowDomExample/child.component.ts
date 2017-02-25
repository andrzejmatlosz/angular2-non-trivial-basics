import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-child',
    templateUrl: 'app/shadowDomExample/child.component.html',
    styleUrls: [ 'app/shadowDomExample/child.component.css' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class ChildComponent {
}
