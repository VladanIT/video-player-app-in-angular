import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { VideosService } from './../../../services/videos/videos.service';

@Component({
  selector: 'app-delete-video',
  templateUrl: './delete-video.component.html',
  styleUrls: ['./delete-video.component.css']
})
export class DeleteVideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public VideosService: VideosService) { }

  ngOnInit(): void {
  }

  deleteItem(){
    this.VideosService.delete(this.data)
  }

}
