import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  styleUrls: ['./child-component.component.css'],
  template: `
    <h3 *ngIf="selectedUser">Edit User</h3>
    <form *ngIf="selectedUser">
      <div>
        <label>Name:</label>
        <input type="text" [(ngModel)]="selectedUser.name" name="name">
      </div>
      <div>
        <label>Email:</label>
        <input type="email" [(ngModel)]="selectedUser.email" name="email">
      </div>
      <button (click)="update()">Update</button>
    </form>
  `
})
export class ChildComponentComponent {
  @Input() selectedUser:any;
  @Output() updateUser = new EventEmitter<any>();

  update() {
    this.updateUser.emit(this.selectedUser);
  }
}
