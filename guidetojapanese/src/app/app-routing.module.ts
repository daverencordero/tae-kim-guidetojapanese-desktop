import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path:'Writing-System', loadChildren: ()=>import('./chapters/writing-system/writing-system.module').then(m=>m.WritingSystemModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
