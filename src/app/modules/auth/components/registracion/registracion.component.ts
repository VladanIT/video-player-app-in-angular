import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.css']
})
export class RegistracionComponent implements OnInit {

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    psw: new FormControl('')
  });

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  saveData(){
    this.authService.signUp(this.signUpForm.value);
  }
}
