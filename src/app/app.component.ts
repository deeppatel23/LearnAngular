import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  model: Login;
  email: any;
  constructor() {
    this.model = new Login("youremail@example.com", "psd12345", true);
  }

  onSubmit(loginform: { value: any; status: any; }) {
    console.log(loginform.value);
    console.log(loginform.status);
  }

  newLogin() {
    this.model = new Login("", "", false);
  }
}
