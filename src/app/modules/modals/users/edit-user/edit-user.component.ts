import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  editUser(){

    const localStorageContent = localStorage.getItem('users');
    let users = [];

    if(localStorageContent === null){
      alert("Greska! Ne postoji ni jedan video u skladistu koji moze da se izmeni.");
    } else {
      users = JSON.parse(localStorageContent);
    }

    users.forEach((user: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      idUser: any;
    }) => {
      if(user.idUser == this.data){
        user.firstName = this.firstName;
        user.lastName = this.lastName;
        user.email = this.email;
        user.password = this.password
      }
    });

    localStorage.setItem('users', JSON.stringify(users));
  }

}
