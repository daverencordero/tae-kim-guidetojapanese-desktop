import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonSectionComponent } from './lesson-section/lesson-section.component';



@NgModule({
  declarations: [LessonSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LessonSectionComponent
  ]
})
export class TemplatesModule { }
