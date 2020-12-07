import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterOverviewComponent } from './chapter-overview/chapter-overview.component';
import { HiraganaComponent } from './hiragana/hiragana.component';
import {TemplatesModule} from "../../templates/templates.module";
import {WritingSystemRoutingModule} from "./writing-system-routing.module";
import {WritingSystemComponent} from "./writing-system.component";
import { KatakanaComponent } from './katakana/katakana.component';
import { KanjiComponent } from './kanji/kanji.component';



@NgModule({
  declarations: [
    ChapterOverviewComponent,
    HiraganaComponent,
    WritingSystemComponent,
    KatakanaComponent,
    KanjiComponent,
  ],
  imports: [
    CommonModule,
    WritingSystemRoutingModule,
    TemplatesModule
  ]
})
export class WritingSystemModule { }
