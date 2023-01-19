import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  name: string = "";
  description: string = "";
  link: string = "";

  editVideo(){

    const localStorageContent = localStorage.getItem('videos');
    let videos = [];

    if(localStorageContent === null){
      alert("Greska! Ne postoji ni jedan video u skladistu koji moze da se izmeni.");
    } else {
      videos = JSON.parse(localStorageContent);
    }

    videos.forEach((video: {
      name: string;
      opis: string;
      link: string;
      idVideo: any;
    }) => {
      if(video.idVideo == this.data){
        video.name = this.name;
        video.opis = this.description;
        video.link = this.link;
      }
    });

    localStorage.setItem('videos', JSON.stringify(videos));
  }

}
