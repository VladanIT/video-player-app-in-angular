import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { VideoListService } from 'src/app/shared/services/video-list/video-list.service';
import { AddVideoModalComponent } from '../../modals/videos/add-video/add-video-modal.component';
import { DeleteVideoComponent } from '../../modals/videos/delete-video/delete-video.component';
import { EditVideoComponent } from '../../modals/videos/edit-video/edit-video.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public list: VideoListService, private dialog: MatDialog) { }

  videos: any;

  ngOnInit(): void {
    this.videos = this.list.getVideoList();
  }

  openDialogAddVideo(){
    this.dialog.open(AddVideoModalComponent);
  }

  openDialogEdit(){
    this.dialog.open(EditVideoComponent);
  }

  openDialogDelete(){
    this.dialog.open(DeleteVideoComponent);
  }

}
