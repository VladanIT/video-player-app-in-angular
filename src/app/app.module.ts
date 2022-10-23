import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { RegistracionComponent } from './modules/pages/registracion/registracion.component';
import { HeaderComponent } from './shared/layout/components/header/header.component';
import { FooterComponent } from './shared/layout/components/footer/footer.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AdminComponent } from './modules/pages/admin/admin.component';
import { SafePipe } from './shared/pipes/safe.pipe';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registracion', component: RegistracionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
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
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
