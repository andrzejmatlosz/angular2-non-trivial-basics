import { Component } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templateExample/templateExample.component.html'
})
export class TemplateExampleComponent {
    items: Array<string> = [ "item1", "item2", "item3", "item4" ];
}
