/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Component } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { PanelModule } from 'eang'

@Component({
  selector: 'app',
  template: `<ea-panel>sdfsdf</ea-panel>`
})
class AppComponent {}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, PanelModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
