import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Example Component</h2>
    <app-child></app-child>
  `,
  styles: [`
    h2 {
      color: red;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-angular-app';
}
