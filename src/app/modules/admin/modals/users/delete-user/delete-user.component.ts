import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteUser(){
    const localStorageContent = localStorage.getItem('users');
    let users = [];

    if(localStorageContent === null){
      alert("Desila se greska pri brisanju, ne postoji trazeni video!");
    } else {
      users = JSON.parse(localStorageContent);
    }

    const filtered = users.filter((user: { idUser: any; }) => user.idUser !== this.data)

    localStorage.setItem('users', JSON.stringify(filtered));
  }


}
