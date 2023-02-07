import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    mail: new FormControl(''),
    psw: new FormControl('')
  });

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginForm.value);
  }
}
