import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  styleUrls: ['./parent-component.component.css'],
  template: `
  <h3>Parent Component</h3>
  <app-child-component [selectedUser]="selectedUser" (updateUser)="updateUser($event)"></app-child-component>
  <br>
  <table>
    <tr *ngFor="let user of users">
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td><button (click)="editUser(user)">Edit</button></td>
    </tr>
  </table>
`
})
export class ParentComponentComponent {
  users = [
    { name: 'John Doe', email: 'john@doe.com' },
    { name: 'Jane Doe', email: 'jane@doe.com' }
  ];
  selectedUser:any;

  editUser(user:any) {
    this.selectedUser = user;
  }

  updateUser(user:any) {
    this.selectedUser = null;
    let index = this.users.findIndex(u => u.email === user.email);
    this.users[index] = user;
  }
}
