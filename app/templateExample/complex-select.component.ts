import { Component, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
    selector: 'my-complex-select',
    templateUrl: 'app/templateExample/complex-select.component.html',
    styleUrls: [ 'app/templateExample/complex-select.component.css' ]
})
export class ComplexSelectComponent {

    @ContentChild(TemplateRef) innerTemplate: TemplateRef<any>;
    
    @Input() public items: Array<string> = [];
}
