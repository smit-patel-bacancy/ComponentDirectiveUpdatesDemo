import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-component-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-component-demo1.component.html',
  styleUrls: ['./standalone-component-demo1.component.scss']
})
export class StandaloneComponentDemo1Component {

}
