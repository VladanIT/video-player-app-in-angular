import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5,}')])
  });

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginForm.value);
  }

  logout(){
    this.authService.logout();
  }
}
