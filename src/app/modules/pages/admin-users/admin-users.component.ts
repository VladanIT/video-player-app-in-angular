import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../modals/users/delete/delete.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(DeleteComponent);
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
