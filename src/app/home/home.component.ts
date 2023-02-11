import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  //for Navigating using code
  // goToProduct() {
  //   this.router.navigate(['/product', 42]);
  // }

  //for query parameters
  goToProduct() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: 42,
      }
    };
    this.router.navigate(['/product'], navigationExtras);
  }
}
