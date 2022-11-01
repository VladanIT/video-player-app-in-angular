import { Component, OnInit } from '@angular/core';
import { VideoListService } from 'src/app/shared/services/video-list/video-list.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public list: VideoListService) { }

  videos: any;

  ngOnInit(): void {
    this.videos = this.list.getVideoList();
  }

}
