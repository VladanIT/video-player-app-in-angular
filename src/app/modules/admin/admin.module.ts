import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './components/users/users.component';
import { VideoComponent } from './components/video/video.component';

import { EditUserComponent } from './modals/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './modals/users/delete-user/delete-user.component';
import { EditVideoComponent } from './modals/videos/edit-video/edit-video.component';
import { DeleteVideoComponent } from './modals/videos/delete-video/delete-video.component';
import { AddVideoComponent } from './modals/videos/add-video/add-video.component';


@NgModule({
  declarations: [
    UsersComponent,
    VideoComponent,
    AddVideoComponent,
    EditUserComponent,
    DeleteUserComponent,
    EditVideoComponent,
    DeleteVideoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
