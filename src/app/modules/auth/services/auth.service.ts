import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(data: any){
    const person = {
      name: data.firstName,
      lastName: data.lastName,
      email: data.mail,
      password: data.psw
    }

    const localStorageContent = localStorage.getItem('users');
    let users = [];

    if (localStorageContent === null) {
      users = [];
    } else {
      users = JSON.parse(localStorageContent);
    }

    users.push(person);
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(data: any){
    const localStorageContent = localStorage.getItem('users');
    let users;

    if (localStorageContent === null) {
      alert("Ne postoji taj korisnik!");
    } else {
      users = JSON.parse(localStorageContent);
    }

    users.forEach((u: { email: string; password: string; }) => {
      if (u.email == data.mail && u.password == data.psw) {
        alert("Postoji korisnik!");
      } else {
        alert("Nije tacan email ili sifra!");
      }
    });
  }
}
