import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public usersService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.usersService.delete(this.data);
  }


}
