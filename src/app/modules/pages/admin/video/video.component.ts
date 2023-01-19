import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { VideoListService } from 'src/app/shared/services/video-list/video-list.service';
import { AddVideoComponent } from '../../../modals/videos/add-video/add-video.component';
import { DeleteVideoComponent } from '../../../modals/videos/delete-video/delete-video.component';
import { EditVideoComponent } from '../../../modals/videos/edit-video/edit-video.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(public list: VideoListService, private dialog: MatDialog) { }

  videos: any;

  ngOnInit(): void {
    this.videos = this.list.getVideoList();
  }

  openDialogAddVideo(){
    this.dialog.open(AddVideoComponent);
  }

  openDialogEdit(value : any){
    this.dialog.open(EditVideoComponent, {
      data: value
    });
  }

  openDialogDelete(value : any){
    this.dialog.open(DeleteVideoComponent, {
      data: value
    });
  }

}
