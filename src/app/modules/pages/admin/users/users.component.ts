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

  users: any;

  ngOnInit(): void {
    this.users = this.getUsersList();
  }

  openDialogDelete(value: any){
    this.dialog.open(DeleteUserComponent, {
      data: value
    });
  }
  openDialogEdit(value: any){
    this.dialog.open(EditUserComponent, {
      data: value
    })
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
