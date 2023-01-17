import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../../../modals/users/delete-user/delete-user.component';
import { EditUserComponent } from '../../../modals/users/edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogDelete(){
    this.dialog.open(DeleteUserComponent);
  }
  openDialogEdit(){
    this.dialog.open(EditUserComponent)
  }

  users: any;

  ngOnInit(): void {
    this.users = this.getUsersList();
  }

  getUsersList(){

    let users = [];

    const localStorageContent = localStorage.getItem('users');

    if (localStorageContent === null) {
      alert("ne postoji ni jedan video");
    } else {
      users = JSON.parse(localStorageContent);
    }

    return users;
  }

}
