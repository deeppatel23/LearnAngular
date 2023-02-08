import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <h2>Hi, from child Component</h2>
  `,
  styles: [`
  h2 {
    color: blue;
  }
`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent {

}
