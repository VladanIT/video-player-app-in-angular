import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor() { }

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
