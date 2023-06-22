import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { VideosService } from './../../../services/videos/videos.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor(public VideosService: VideosService, public dialogRef: MatDialogRef<AddVideoComponent>) { }

  ngOnInit(): void {
  }

  addForm = new FormGroup({
    idVideo: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    link: new FormControl('')
  });

  // idVideo: string = "";
  // name: string = "";
  // description: string = "";
  // link: string = "";

  saveData(){
    this.VideosService.addVideo(this.addForm.value);
    this.dialogRef.close(true);
  }

}
