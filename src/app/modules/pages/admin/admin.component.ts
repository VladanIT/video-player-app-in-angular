import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videos: any;

  ngAfterContentInit(){

    const localStorageContent = localStorage.getItem('videos');

    if (localStorageContent === null) {
      alert("ne postoji ni jedan video");
    } else {
      this.videos = JSON.parse(localStorageContent);
    }

    return this.videos;
  }

}
