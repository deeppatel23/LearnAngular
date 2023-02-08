import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `{{productName | uppercase}} = {{productPrice | currency:'INR':'symbol-narrow':'3.2-2'}}`

})
export class AppComponent {
  title = 'my-angular-app';
  productName = 'Angular course at ';
  productPrice = 990;
}
