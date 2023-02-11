import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
