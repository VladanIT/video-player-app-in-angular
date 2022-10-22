import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'videos',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){

    const localStorageContent = localStorage.getItem('videos');


    if (localStorageContent === null) {
      alert("ne postoji ni jedan video");
    } else {
      this.videos = JSON.parse(localStorageContent);
    }

    console.log(this.videos)

    return this.videos;
  }

}
