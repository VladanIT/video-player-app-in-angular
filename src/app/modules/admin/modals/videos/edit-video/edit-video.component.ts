import { FormGroup, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { VideosService } from './../../../services/videos/videos.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public ID: number, public VideosService: VideosService) { }

  ngOnInit(): void {
  }

  editForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    link: new FormControl('')
  });

  // name: string = "";
  // description: string = "";
  // link: string = "";

  editVideo(){
    this.VideosService.editVideo(this.editForm.value, this.ID)
  }

}
