import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { EangModule } from '../../../src/index';
import { MenuTreeComponent } from './menu-tree/menu-tree.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuTreeComponent
  ],
  imports: [
    BrowserModule,
    EangModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
