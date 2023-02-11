import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  template: `
    <p>Product ID: {{ id }}</p>
  `
})
export class ProductComponent implements OnInit {
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(first())
      .subscribe(params => {
        this.id = +params['id'];
      });
  }
}
