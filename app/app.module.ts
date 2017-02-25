
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuModule } from './menu/menu.module';
import { ImpurPipeModule } from './impurPipe/impurPipe.module';
import { StructuralDirectiveModule } from './structuralDirective/structuralDirective.module';
import { ContentChildExampleModule } from './contentChildExample/contentChildExample.module';
import { LifecycleHooksExampleModule } from './lifecycleHooksExample/lifecycleHooksExample.module';
import { TemplateExampleModule } from './templateExample/templateExample.module';
import { ShadowDomExampleModule } from './shadowDomExample/shadowDomExample.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule, 
        MenuModule,
        ContentChildExampleModule,
        LifecycleHooksExampleModule,
        ImpurPipeModule,
        StructuralDirectiveModule,
        AppRoutingModule,
        TemplateExampleModule,
        ShadowDomExampleModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }