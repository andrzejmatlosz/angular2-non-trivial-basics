import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ContentChildExampleComponent } from './contentChildExample/contentChildExample.component';
import { LifecycleHooksExampleComponent } from './lifecycleHooksExample/lifecycleHooksExample.component';
import { ImpurPipeComponent } from './impurPipe/impurPipe.component';
import { StructuralDirectiveComponent } from './structuralDirective/structuralDirective.component';
import { TemplateExampleComponent } from './templateExample/templateExample.component';
import { ShadowDomExampleComponent } from './shadowDomExample/shadowDomExample.component';

const appRoutes: Routes = [
  { path: 'contentChild', component: ContentChildExampleComponent },
  { path: 'lifecycleHooks', component: LifecycleHooksExampleComponent },
  { path: 'impurPipe', component: ImpurPipeComponent },
  { path: 'structuralDirective', component: StructuralDirectiveComponent },
  { path: 'templateExample', component: TemplateExampleComponent },
  { path: 'shadowDomExample', component: ShadowDomExampleComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
