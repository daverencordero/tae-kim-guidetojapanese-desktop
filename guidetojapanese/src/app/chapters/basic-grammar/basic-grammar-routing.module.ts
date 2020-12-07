import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicGrammarComponent} from "./basic-grammar.component";
import {ChapterOverviewComponent} from "./chapter-overview/chapter-overview.component";
import {ExpressingStateComponent} from "./expressing-state/expressing-state.component";
import {IntroParticlesComponent} from "./intro-particles/intro-particles.component";

const routes: Routes = [
  {
    path:'',
    component: BasicGrammarComponent,
    children:[
      {path:'', redirectTo:'Chapter-Overview', pathMatch:'full'},
      {path:'Chapter-Overview', component: ChapterOverviewComponent},
      {path:'Expressing-State-of-Being', component: ExpressingStateComponent},
      {path:'Introduction-to-Particles', component: IntroParticlesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicGrammarRoutingModule { }
