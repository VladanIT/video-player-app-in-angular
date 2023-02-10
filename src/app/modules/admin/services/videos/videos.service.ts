import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  addVideo(data: any){
    const video = {
      idVideo : data.idVideo,
      name : data.name,
      opis: data.description,
      link : data.link
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

  editVideo(data: any, ID: number){
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
      if(video.idVideo == ID){
        video.name = data.name;
        video.opis = data.description;
        video.link = data.link;
      }
    });

    localStorage.setItem('videos', JSON.stringify(videos));
  }

  delete(data: number){
    const localStorageContent = localStorage.getItem('videos');
    let videos = [];

    if(localStorageContent === null){
      alert("Desila se greska pri brisanju, ne postoji trazeni video!");
    } else {
      videos = JSON.parse(localStorageContent);
    }

    const filtered = videos.filter((video: { idVideo: any; }) => video.idVideo !== data)

    localStorage.setItem('videos', JSON.stringify(filtered));
  }
}
