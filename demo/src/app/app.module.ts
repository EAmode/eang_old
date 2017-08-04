import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { EangModule } from '../../../src/index'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EangModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
