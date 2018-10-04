import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import {
  LayoutModule,
  PanelModule,
  AutoCompleteModule,
  ThemePickerModule,
  MarkdownModule
} from '@eamode/eang'

import {
  MdcButtonModule,
  MdcRippleModule,
  MdcRadioModule
} from '@angular-mdc/web'

import { ReactiveComponent } from './feature/reactive/reactive.component'
import { ThemingComponent } from './feature/theming/theming.component'

@NgModule({
  declarations: [AppComponent, ReactiveComponent, ThemingComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    LayoutModule,
    AutoCompleteModule,
    PanelModule,
    ThemePickerModule,
    MarkdownModule,
    MdcButtonModule,
    MdcRippleModule,
    MdcRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
