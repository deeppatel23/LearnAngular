import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  styleUrls: ['./parent-component.component.css'],
  template: `
            <h1>Hello {{message}}</h1>
            <app-child-component [greetMessage]="messageToChild"></app-child-component>
            <app-child-component *ngFor="let n of names" [Name]="n"></app-child-component>
            `
})
export class ParentComponentComponent {
  message: string = "I am parent";
  messageToChild: string = "This message passed from parent to child";
  names = ["abc", "def", '', "xyz"]
}
