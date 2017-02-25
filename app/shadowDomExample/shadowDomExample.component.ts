import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-shadow-dom-example',
    templateUrl: 'app/shadowDomExample/shadowDomExample.component.html',
    styleUrls: [ 'app/shadowDomExample/shadowDomExample.component.css' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class ShadowDomExampleComponent {
}
