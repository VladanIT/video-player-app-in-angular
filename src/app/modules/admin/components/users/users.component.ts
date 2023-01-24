import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeleteUserComponent } from '../../modals/users/delete-user/delete-user.component';
import { EditUserComponent } from '../../modals/users/edit-user/edit-user.component';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public dialog: MatDialog, public usersService: UsersService) { }

  users: any;

  ngOnInit(): void {
    this.users = this.getUsersList();
  }

  openDialogDelete(value: number){
    this.dialog.open(DeleteUserComponent, {
      data: value
    });
  }
  openDialogEdit(value: number){
    this.dialog.open(EditUserComponent, {
      data: value
    })
  }

  getUsersList(){
    return this.usersService.select();
  }

}
