import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      <div>
        <label>Name:</label>
        <input type="text" formControlName="name">
      </div>
      <div>
        <label>Email:</label>
        <input type="email" formControlName="email">
      </div>
      <button [disabled]="form.invalid">Submit</button>
    </form>
  `
})
export class AppComponent {
  form: FormGroup | any;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
}
