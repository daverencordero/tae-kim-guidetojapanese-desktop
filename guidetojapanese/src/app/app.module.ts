import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PanelComponent } from './panel/panel.component';
import { HeaderComponent } from './header/header.component';
import {WritingSystemModule} from "./chapters/writing-system/writing-system.module";
import {BasicGrammarModule} from "./chapters/basic-grammar/basic-grammar.module";
import {EssentialGrammarModule} from "./chapters/essential-grammar/essential-grammar.module";
import {SpecialExpressionsModule} from "./chapters/special-expressions/special-expressions.module";
import {AdvancedTopicsModule} from "./chapters/advanced-topics/advanced-topics.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PanelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WritingSystemModule,
    BasicGrammarModule,
    EssentialGrammarModule,
    SpecialExpressionsModule,
    AdvancedTopicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
