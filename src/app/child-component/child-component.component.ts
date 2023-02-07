import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  styleUrls: ['./child-component.component.css'],
  template: `
            <button (click)="valueChanged()">Count+1</button>
            `
})
export class ChildComponentComponent {

  @Output() valueChange = new EventEmitter();
  counter: number = 0;
  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }
}
