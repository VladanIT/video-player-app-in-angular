import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email: string = "";
  password: string = "";

  login(){
    const user = {
      email: this.email,
      password: this.password
    }

    const localStorageContent = localStorage.getItem('users');
    let users;

    if (localStorageContent === null) {
      alert("Ne postoji taj korisnik!");
    } else {
      users = JSON.parse(localStorageContent);
    }

    users.forEach((u: { email: string; password: string; }) => {
      if (u.email == this.email && u.password == this.password) {
        alert("Postoji korisnik!");
      } else {
        alert("Nije tacan email ili sifra!");
      }
    });
  }

}
