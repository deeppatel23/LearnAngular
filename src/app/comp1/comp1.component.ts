import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  styleUrls: ['./comp1.component.css'],
  template: `
              Name: <input type="text" [(ngModel)]="name"  ><br/>
                {{name}}
            `
})
export class Comp1Component {
  name:string = 'deep'
}
