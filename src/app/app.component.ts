import { Component } from '@angular/core';
import { SquarePipe } from './custom-pipe';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ 2 | square }}</p>
    <p>{{ 4 | square }}</p>
  `

})
export class AppComponent {
}
