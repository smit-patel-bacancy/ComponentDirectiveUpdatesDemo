import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClassicComponentDemo1Component } from './classic-component-demo1/classic-component-demo1.component';
import { ClassicComponentDemo2Component } from './classic-component-demo2/classic-component-demo2.component';

import { ClassicDirectiveDemo1Directive } from './directives/classic-directive-demo1/classic-directive-demo1.directive';
import { ClassicDirectiveDemo2Directive } from './directives/classic-directive-demo2/classic-directive-demo2.directive';
import { StandaloneDireciveDemo1Directive } from './standalone directives/standalone-directive-demo1/standalone-direcive-demo1.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassicComponentDemo1Component,
    ClassicComponentDemo2Component,
    ClassicDirectiveDemo1Directive,
    ClassicDirectiveDemo2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StandaloneDireciveDemo1Directive
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ClassicComponentDemo1Component,
    ClassicComponentDemo2Component,
    // ClassicDirectiveDemo1Directive,
    // ClassicDirectiveDemo2Directive
  ]
})
export class AppModule { }
