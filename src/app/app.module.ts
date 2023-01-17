import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/pages/front/login/login.component';
import { RegistracionComponent } from './modules/pages/front/registracion/registracion.component';
import { HeaderComponent } from './shared/layout/components/header/header.component';
import { FooterComponent } from './shared/layout/components/footer/footer.component';
import { HomeComponent } from './modules/pages/front/home/home.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { VideoComponent } from './modules/pages/admin/video/video.component';
import { UsersComponent } from './modules/pages/admin/users/users.component';
import { AddVideoComponent } from './modules/modals/videos/add-video/add-video.component';
import { EditVideoComponent } from './modules/modals/videos/edit-video/edit-video.component';
import { DeleteVideoComponent } from './modules/modals/videos/delete-video/delete-video.component';
import { EditUserComponent } from './modules/modals/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './modules/modals/users/delete-user/delete-user.component';



const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registracion', component: RegistracionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: VideoComponent},
  {path: 'admin-users', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SafePipe,
    EditVideoComponent,
    DeleteVideoComponent,
    EditUserComponent,
    AddVideoComponent,
    VideoComponent,
    UsersComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
