import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import {BasicGrammarModule} from "./chapters/basic-grammar/basic-grammar.module";
import {EssentialGrammarModule} from "./chapters/essential-grammar/essential-grammar.module";
import {SpecialExpressionsModule} from "./chapters/special-expressions/special-expressions.module";
import {AdvancedTopicsModule} from "./chapters/advanced-topics/advanced-topics.module";
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicGrammarModule,
    EssentialGrammarModule,
    SpecialExpressionsModule,
    AdvancedTopicsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
