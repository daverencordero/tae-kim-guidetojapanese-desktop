import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HiraganaComponent} from "./hiragana/hiragana.component";
import {ChapterOverviewComponent} from "./chapter-overview/chapter-overview.component";
import {WritingSystemComponent} from "./writing-system.component";
import {KatakanaComponent} from "./katakana/katakana.component";
import {KanjiComponent} from "./kanji/kanji.component";
import {AdditionalSoundsComponent} from "./additional-sounds/additional-sounds.component";

const routes: Routes = [
  {
    path:'',
    component: WritingSystemComponent,
    children:[
      {path:'', redirectTo:'Chapter-Overview', pathMatch:'full'},
      {path:'Chapter-Overview', component: ChapterOverviewComponent},
      {path:'Hiragana', component: HiraganaComponent},
      {path:'Katakana', component: KatakanaComponent},
      {path:'Additional-Sounds', component: AdditionalSoundsComponent},
      {path:'Kanji', component: KanjiComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritingSystemRoutingModule { }
