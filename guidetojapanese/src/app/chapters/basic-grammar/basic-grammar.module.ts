import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasicGrammarComponent} from "./basic-grammar.component";
import {BasicGrammarRoutingModule} from "./basic-grammar-routing.module";
import { ChapterOverviewComponent } from './chapter-overview/chapter-overview.component';
import { ExpressingStateComponent } from './expressing-state/expressing-state.component';
import { IntroParticlesComponent } from './intro-particles/intro-particles.component';
import {TemplatesModule} from "../../templates/templates.module";
import { AdjectivesComponent } from './adjectives/adjectives.component';
import { VerbBasicsComponent } from './verb-basics/verb-basics.component';
import { NegativeVerbsComponent } from './negative-verbs/negative-verbs.component';
import { PastVerbsComponent } from './past-verbs/past-verbs.component';



@NgModule({
  declarations: [
    BasicGrammarComponent,
    ChapterOverviewComponent,
    ExpressingStateComponent,
    IntroParticlesComponent,
    AdjectivesComponent,
    VerbBasicsComponent,
    NegativeVerbsComponent,
    PastVerbsComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    BasicGrammarRoutingModule
  ]
})
export class BasicGrammarModule { }
