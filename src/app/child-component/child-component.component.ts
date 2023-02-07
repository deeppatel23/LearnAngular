import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  styleUrls: ['./child-component.component.css'],
  template: `
            <h3> {{_name}} </h3>
            `
})
export class ChildComponentComponent implements OnInit{
  @Input() greetMessage: string = "Child: No message found";
  _name:string = "";
  constructor() {

  }
  ngOnInit() {
  }

  @Input()
  set Name(name:string) {
    this._name =  (name && name.trim()) || 'got null string';
  }

  get Name() {
    return this._name;
  }
}
