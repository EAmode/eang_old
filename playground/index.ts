/**
 * This is only for local test
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { BoxModule } from "eang";

@Component({
  selector: "app",
  template: `<Box>sdfsdf</Box>`
})
class AppComponent {}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, BoxModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
