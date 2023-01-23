import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegistracionComponent } from './modules/auth/components/registracion/registracion.component';
import { HeaderComponent } from './shared/layout/components/header/header.component';
import { FooterComponent } from './shared/layout/components/footer/footer.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { VideoComponent } from './modules/admin/components/video/video.component';
import { UsersComponent } from './modules/admin/components/users/users.component';
import { AddVideoComponent } from './modules/admin/modals/videos/add-video/add-video.component';
import { EditVideoComponent } from './modules/admin/modals/videos/edit-video/edit-video.component';
import { DeleteVideoComponent } from './modules/admin/modals/videos/delete-video/delete-video.component';
import { EditUserComponent } from './modules/admin/modals/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './modules/admin/modals/users/delete-user/delete-user.component';


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
