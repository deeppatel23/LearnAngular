import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  styleUrls: ['./parent-component.component.css'],
  template: `
    <app-child-component></app-child-component>
    <button (click)="sendMessage()">Send Message</button>
  `
})
export class ParentComponentComponent {
  @ViewChild(ChildComponentComponent, { static: false }) childComponent: any;

  sendMessage() {
    console.log(`Message: ${this.childComponent.messageInput.nativeElement.value}`);
  }
}
