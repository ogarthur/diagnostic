import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzComponentsRoutingModule } from './quizz-components-routing.module';
import { BoxResultComponent } from './box-result/box-result.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    BoxResultComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BoxResultComponent
  ]
})
export class QuizzComponentsModule { }
