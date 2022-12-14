import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { RegistracionComponent } from './modules/pages/registracion/registracion.component';
import { HeaderComponent } from './shared/layout/components/header/header.component';
import { FooterComponent } from './shared/layout/components/footer/footer.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AdminComponent } from './modules/pages/admin/admin.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { AdminUsersComponent } from './modules/pages/admin-users/admin-users.component';
import { AddVideoModalComponent } from './modules/modals/add-video/add-video-modal.component';
import { EditVideoComponent } from './modules/modals/edit-video/edit-video.component';
import { DeleteVideoComponent } from './modules/modals/delete-video/delete-video.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registracion', component: RegistracionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-users', component: AdminUsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    SafePipe,
    AdminUsersComponent,
    AddVideoModalComponent,
    EditVideoComponent,
    DeleteVideoComponent
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
