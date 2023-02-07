import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  styleUrls: ['./child-component.component.css'],
  template: `<h2>Hi {{greetMessage}}</h2>`
})
export class ChildComponentComponent {
  @Input() greetMessage: string = "Child: No message found";
}
