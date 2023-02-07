import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  styleUrls: ['./parent-component.component.css'],
  template: `
            <h1>Hello {{message}}</h1>
            <app-child-component (valueChange)="displayCounter($event)"> </app-child-component>
            `
})
export class ParentComponentComponent implements OnInit{
  ngOnInit() {
    
  }

  message: string = "I am parent";
  displayCounter(count: number) {
    console.log(count);
  }
}
