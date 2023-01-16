import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { VideoListService } from 'src/app/shared/services/video-list/video-list.service';
import { AddVideoModalComponent } from '../../modals/videos/add-video/add-video-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public list: VideoListService, private dialogRef: MatDialog) { }

  videos: any;

  ngOnInit(): void {
    this.videos = this.list.getVideoList();
  }

  openDialog(){
    this.dialogRef.open(AddVideoModalComponent);
  }

}
