import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
