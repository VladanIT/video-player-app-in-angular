import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';

import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SafePipe
  ]
})
export class SharedModule { }
