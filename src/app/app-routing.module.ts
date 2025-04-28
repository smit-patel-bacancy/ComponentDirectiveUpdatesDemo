import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassicComponentDemo1Component } from './classic-component-demo1/classic-component-demo1.component';
import { ClassicComponentDemo2Component } from './classic-component-demo2/classic-component-demo2.component';
import { StandaloneComponentDemo1Component } from './standalone components/standalone-component-demo1/standalone-component-demo1.component';
import { StandaloneComponentDemo2Component } from './standalone components/standalone-component-demo2/standalone-component-demo2.component';

const routes: Routes = [
  { path: 'classicComponent1', component: ClassicComponentDemo1Component },
  { path: 'classicComponent2', component: ClassicComponentDemo2Component },
  { path: 'standaloneComponent1', component: StandaloneComponentDemo1Component },
  { path: 'standaloneComponent2', component: StandaloneComponentDemo2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
