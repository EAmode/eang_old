import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { NxModule } from '@nrwl/nx'
import { PanelModule, AutoCompleteModule, ThemePickerModule } from '@eang/eang'

import { ReactiveComponent } from './feature/reactive/reactive.component'
import { ThemingComponent } from './feature/theming/theming.component'

@NgModule({
  declarations: [AppComponent, ReactiveComponent, ThemingComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AutoCompleteModule,
    PanelModule,
    ThemePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
