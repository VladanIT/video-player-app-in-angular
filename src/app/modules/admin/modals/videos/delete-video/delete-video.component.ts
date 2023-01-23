import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-video',
  templateUrl: './delete-video.component.html',
  styleUrls: ['./delete-video.component.css']
})
export class DeleteVideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  deleteItem(){
    // alert(this.data);
    const localStorageContent = localStorage.getItem('videos');
    let videos = [];

    if(localStorageContent === null){
      alert("Desila se greska pri brisanju, ne postoji trazeni video!");
    } else {
      videos = JSON.parse(localStorageContent);
    }

    const filtered = videos.filter((video: { idVideo: any; }) => video.idVideo !== this.data)

    localStorage.setItem('videos', JSON.stringify(filtered));
  }

}
