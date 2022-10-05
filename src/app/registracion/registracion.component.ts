import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.css']
})
export class RegistracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  floatingName: string = "";
  surname: string = "";
  email: string = "";
  password: string = "";

  async saveData(){
    const person = {
      name: this.floatingName,
      lastName: this.surname,
      email: this.email,
      password: this.password
    }

    const jsonData = JSON.stringify(person, null, 2);
    // console.log(jsonData);
    // localStorage.setItem('user', jsonData);
    const localStorageContent = localStorage.getItem('users');

    let users;

    if (localStorageContent === null) {
      users = [];
    } else {
      users = JSON.parse(localStorageContent);
    }

    users.push(jsonData);

    localStorage.setItem('users', JSON.stringify(users, null, 2));
  }
}
