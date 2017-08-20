import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { EangModule } from '../../../src/index'
import { MenuTreeComponent } from './menu-tree/menu-tree.component'
import { MarkdownComponent } from './markdown/markdown.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { AppRoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuTreeComponent,
    MarkdownComponent,
    AutocompleteComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EangModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
