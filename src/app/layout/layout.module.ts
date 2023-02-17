import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavHeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
