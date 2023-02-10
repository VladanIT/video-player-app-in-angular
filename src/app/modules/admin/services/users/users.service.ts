import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  select(){

    let users = [];

    const localStorageContent = localStorage.getItem('users');

    if (localStorageContent === null) {
      alert("ne postoji ni jedan video");
    } else {
      users = JSON.parse(localStorageContent);
    }

    return users;
  }

  edit(data: any, ID: number){
    const localStorageContent = localStorage.getItem('users');
    let users = [];

    if(localStorageContent === null){
      alert("Greska! Ne postoji ni jedan video u skladistu koji moze da se izmeni.");
    } else {
      users = JSON.parse(localStorageContent);
    }

    users.forEach((user: {
      name: string;
      lastName: string;
      email: string;
      password: string;
      idUser: number;
    }) => {
      if(user.idUser == ID){
        user.name = data.firstName;
        user.lastName = data.lastName;
        user.email = data.mail;
        user.password = data.pswd
      }
    });

    localStorage.setItem('users', JSON.stringify(users));
  }

  delete(data: number){
    const localStorageContent = localStorage.getItem('users');
    let users = [];

    if(localStorageContent === null){
      alert("Desila se greska pri brisanju, ne postoji trazeni video!");
    } else {
      users = JSON.parse(localStorageContent);
    }

    const filtered = users.filter((user: { idUser: any; }) => user.idUser !== data)

    localStorage.setItem('users', JSON.stringify(filtered));
  }
}
