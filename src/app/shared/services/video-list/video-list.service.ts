import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {

  constructor() { }

  getVideoList(){

    let videos = [];

    const localStorageContent = localStorage.getItem('videos');

    if (localStorageContent === null) {
      alert("ne postoji ni jedan video");
    } else {
      videos = JSON.parse(localStorageContent);
    }

    return videos;
  }
}
