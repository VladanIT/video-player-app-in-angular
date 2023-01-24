import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(floatingName: string, surname: string, email: string, password: string){
    const person = {
      name: floatingName,
      lastName: surname,
      email: email,
      password: password
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

  login(email: string, password: string){
    const localStorageContent = localStorage.getItem('users');
    let users;

    if (localStorageContent === null) {
      alert("Ne postoji taj korisnik!");
    } else {
      users = JSON.parse(localStorageContent);
    }

    users.forEach((u: { email: string; password: string; }) => {
      if (u.email == email && u.password == password) {
        alert("Postoji korisnik!");
      } else {
        alert("Nije tacan email ili sifra!");
      }
    });
  }
}
