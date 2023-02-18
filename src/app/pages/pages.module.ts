import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { QuizzComponentsModule } from '../quizz-components/quizz-components.module';


@NgModule({
  declarations: [
    HomeComponent,
    QuizzComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    QuizzComponentsModule
  ]
})
export class PagesModule { }
