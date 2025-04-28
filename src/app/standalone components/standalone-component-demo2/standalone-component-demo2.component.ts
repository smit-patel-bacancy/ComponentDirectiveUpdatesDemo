import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-component-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-component-demo2.component.html',
  styleUrls: ['./standalone-component-demo2.component.scss']
})
export class StandaloneComponentDemo2Component {

}
