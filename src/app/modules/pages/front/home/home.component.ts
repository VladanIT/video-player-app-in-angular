import { Component, OnInit } from '@angular/core';
import { VideoListService } from 'src/app/shared/services/video-list/video-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private list: VideoListService) { }

  videos: any;

  ngOnInit(): void {
    this.videos = this.list.getVideoList();
  }



}
