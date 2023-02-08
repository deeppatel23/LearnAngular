import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-component',
  styleUrls: ['./child-component.component.css'],
  template: `
    <input #messageInput type="text">
  `
})
export class ChildComponentComponent {
  @ViewChild('messageInput', { static: false }) messageInput: any;
}
