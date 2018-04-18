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
  <section class="mode">
  <playground>
    <nav>
        <h1>eang Playground</h1>
        <h2>Basics</h2>
        <a routerLink="panel" routerLinkActive="active">Panel</a> |
        <a routerLink="button" routerLinkActive="active">Button</a>

        <h2>Form Controls</h2>
        <a routerLink="autocomplete" routerLinkActive="active">Autocomplete</a> |
        <a routerLink="checkbox" routerLinkActive="active">Checkbox</a>  |
        <a routerLink="datepicker" routerLinkActive="active">Datepicker</a> |
        <a routerLink="formfield" routerLinkActive="active">Form field</a> |
        <a routerLink="input" routerLinkActive="active">Input</a> |
        <a routerLink="radiobutton" routerLinkActive="active">Radio button</a> |
        <a routerLink="select" routerLinkActive="active">Select</a> |
        <a routerLink="slider" routerLinkActive="active">Slider</a> |
        <a routerLink="slidetoggle" routerLinkActive="active">Slide toggle</a>

        <h2>Navigation</h2>
        <a routerLink="menu" routerLinkActive="active">Menu</a> |
        <a routerLink="sidenav" routerLinkActive="active">Sidenav</a> |
        <a routerLink="toolbar" routerLinkActive="active">Toolbar</a>

        <h2>Layout</h2>
        <a routerLink="card" routerLinkActive="active">Card</a> |
        <a routerLink="divider" routerLinkActive="active">Divider</a> |
        <a routerLink="expansionpanel" routerLinkActive="active">Expansion Panel</a> |
        <a routerLink="gridlist" routerLinkActive="active">Grid List</a> |
        <a routerLink="list" routerLinkActive="active">List</a> |
        <a routerLink="autocomplete" routerLinkActive="active">Autocomplete</a> |
        <a routerLink="autocomplete" routerLinkActive="active">Autocomplete</a>

        <h2>Buttons &amp; Indicators</h2>
        <a routerLink="button" routerLinkActive="active">Button</a> |
        <a routerLink="buttontoggle" routerLinkActive="active">Button Toggle</a> |
        <a routerLink="chips" routerLinkActive="active">Chips</a> |
        <a routerLink="icon" routerLinkActive="active">Icon</a> |
        <a routerLink="progressspinner" routerLinkActive="active">Progress Spinner</a> |
        <a routerLink="progressbar" routerLinkActive="active">Progress Bar</a>

        <h2>Popups &amp; Modals</h2>
        <a routerLink="dialog" routerLinkActive="active">Dialog</a> |
        <a routerLink="snackbar" routerLinkActive="active">Snackbar</a> |
        <a routerLink="tooltip" routerLinkActive="active">Tooltip</a>

        <h2>Data Tables</h2>
        <a routerLink="paginator" routerLinkActive="active">Paginator</a> |
        <a routerLink="sortheader" routerLinkActive="active">Sort Header</a> |
        <a routerLink="table" routerLinkActive="active">Table</a>
      </nav>
    <content>
      <router-outlet></router-outlet>
    </content>
    </playground>
  </section>
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
