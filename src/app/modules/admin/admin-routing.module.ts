import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'videos', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
