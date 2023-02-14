import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

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
        localStorage.setItem('login', JSON.stringify(data.mail));
        this.router.navigate(['/home']);
      }
    });
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigate(['/auth/login']);
  }
}
