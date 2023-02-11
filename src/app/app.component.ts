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
      <div>
        <label>Age:</label>
        <input type="number" formControlName="age">
        <div *ngIf="form.get('age').errors?.invalidAge">
          Age must be between 18 and 100.
    </div>
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
      email: ['', [Validators.required, Validators.email]],
      age:  [Validators.required, this.validateAge.bind(this, 18, 100)]
    });
  }

  validateAge(min: number, max: number, control: FormControl) {
    const age = control.value;
    if (age < min || age > max) {
      return { invalidAge: true };
    }
    return null;
  }
}
