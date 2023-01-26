import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  idVideo: string = "";
  name: string = "";
  description: string = "";
  link: string = "";

  async saveData(){
    const video = {
      idVideo : this.idVideo,
      name : this.name,
      opis: this.description,
      link : this.link
    }

    const localStorageContent = localStorage.getItem('videos');
    let videos = [];

    if(localStorageContent === null){
      videos = [];
    } else {
      videos = JSON.parse(localStorageContent);
    }

    videos.push(video);
    localStorage.setItem('videos', JSON.stringify(videos));
  }

}
