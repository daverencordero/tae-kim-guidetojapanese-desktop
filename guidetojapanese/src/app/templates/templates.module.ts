import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonSectionComponent } from './lesson-section/lesson-section.component';
import { LessonComponent } from './lesson/lesson.component';



@NgModule({
  declarations: [LessonSectionComponent, LessonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LessonSectionComponent,
    LessonComponent
  ]
})
export class TemplatesModule { }
