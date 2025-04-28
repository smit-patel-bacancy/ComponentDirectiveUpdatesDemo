import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StandaloneComponentDemo2Component } from "../standalone-component-demo2/standalone-component-demo2.component";
import { StandaloneDireciveDemo1Directive } from 'src/app/standalone directives/standalone-directive-demo1/standalone-direcive-demo1.directive';
import { StandaloneDireciveDemo2Directive } from 'src/app/standalone directives/standalone-directive-demo2/standalone-direcive-demo2.directive';
// import { AppModule } from 'src/app/app.module';
// import { ClassicComponentDemo1Component } from 'src/app/classic-component-demo1/classic-component-demo1.component';

@Component({
  selector: 'app-standalone-component-demo1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StandaloneComponentDemo2Component,
    // ClassicComponentDemo1Component   // will not work because ClassicComponentDemo1Component is not a standalone component
    // AppModule can not be imported here because it will create a circular dependency
    // AppModule // need to import AppModule to use ClassicComponentDemo1Component as ClassicComponentDemo1Component is declared inside AppModule
    StandaloneDireciveDemo1Directive,
    StandaloneDireciveDemo2Directive
  ],
  templateUrl: './standalone-component-demo1.component.html',
  styleUrls: ['./standalone-component-demo1.component.scss']
})
export class StandaloneComponentDemo1Component {
  name: string = 'Standalone Component Demo 1';

}
