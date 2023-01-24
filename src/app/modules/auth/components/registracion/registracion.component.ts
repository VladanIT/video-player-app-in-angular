import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.css']
})
export class RegistracionComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  floatingName: string = "";
  surname: string = "";
  email: string = "";
  password: string = "";

  saveData(){
    this.authService.signUp(this.floatingName, this.surname, this.email, this.password);
  }
}
