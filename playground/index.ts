/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component, OnInit } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { RouterModule, Routes } from '@angular/router'

import { PanelModule, LoggingService } from 'eang'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { PanelPageComponent } from './app/panel'
import { ButtonPageComponent } from './app/button'

@Component({
  selector: 'pg-root',
  template: `
  <h1>eang Playground</h1>
  <nav>
    <a routerLink="panel" routerLinkActive="active">Panel</a> |
    <a routerLink="button" routerLinkActive="active">Button</a> |
    <a routerLink="button" routerLinkActive="active">Autocomplete</a> |
    <a routerLink="button" routerLinkActive="active">Checkbox</a>  |
    <a routerLink="button" routerLinkActive="active">Datepicker</a>
  </nav>
  <router-outlet></router-outlet>

  `
})
class AppComponent implements OnInit {
  public toolbarState = new BehaviorSubject('maximized')
  public toolbarOrientation = new BehaviorSubject('top')

  constructor(private logger: LoggingService) {
    logger.info('Starting playground!')
  }

  ngOnInit(): void {
    this.toolbarState = new BehaviorSubject('maximized')
  }
  changeState(state: string) {
    console.log(state)
    this.toolbarState.next(state)
  }
  changeOrientation(orientation: string) {
    console.log(orientation)
    this.toolbarOrientation.next(orientation)
  }
}

const appRoutes: Routes = [
  { path: 'panel', component: PanelPageComponent },
  { path: 'button', component: ButtonPageComponent },
  { path: '', redirectTo: 'panel', pathMatch: 'full' }
]

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, PanelPageComponent, ButtonPageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    PanelModule
  ],
  providers: [LoggingService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
