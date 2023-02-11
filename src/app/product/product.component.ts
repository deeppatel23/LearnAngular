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

  //for navigating using url parameters
  // ngOnInit() {
  //   this.route.params
  //     .pipe(first())
  //     .subscribe(params => {
  //       this.id = +params['id'];
  //     });
  // }

  //for navigativg using query paramters
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
    });
  }
}
