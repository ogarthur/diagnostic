import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuizzformComponent } from './quizzform/quizzform.component';



@NgModule({
  declarations: [
    QuestionComponent,
    QuizzformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizzModule { }
