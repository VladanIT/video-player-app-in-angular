import { FormGroup, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    pswd: new FormControl('')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public ID: number, public usersService: UsersService) { }

  ngOnInit(): void {
  }

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  editUser(){
    this.usersService.edit(this.editForm.value, this.ID);
  }

}
