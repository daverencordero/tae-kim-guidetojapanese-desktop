import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonSectionComponent } from './lesson-section/lesson-section.component';
import { LessonComponent } from './lesson/lesson.component';
import { TableComponent } from './table/table.component';
import { NoteComponent } from './note/note.component';



@NgModule({
  declarations: [LessonSectionComponent, LessonComponent, TableComponent, NoteComponent],
  imports: [
    CommonModule
  ],
    exports: [
        LessonSectionComponent,
        LessonComponent,
        TableComponent,
        NoteComponent
    ]
})
export class TemplatesModule { }
