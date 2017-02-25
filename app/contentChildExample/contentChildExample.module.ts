import { NgModule } from '@angular/core';

import { ContentChildExampleComponent }   from './contentChildExample.component';
import { ArticleComponent }   from './article/article.component';

@NgModule({
    exports: [ ContentChildExampleComponent ],
    declarations: [ ContentChildExampleComponent, ArticleComponent ]
})
export class ContentChildExampleModule { }