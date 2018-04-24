/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component, OnInit } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { RouterModule, Routes } from '@angular/router'

import { PanelModule, LoggingService, ThemePickerModule } from 'eang'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { PanelPageComponent } from './app/panel'
import { ButtonPageComponent } from './app/button'
import { ThemePickerPageComponent } from './app/themepicker'

@Component({
  selector: 'pg-root',
  template: `
      <header>
        <h1>eang Playground</h1>
      </header>
      <div class="pg-container-main">
        <nav>
          <h4>Basics</h4>
          <a routerLink="panel" routerLinkActive="active">Panel</a> |
          <a routerLink="button" routerLinkActive="active">Button</a>

          <h4>Form Controls</h4>
          <a routerLink="autocomplete" routerLinkActive="active">Autocomplete</a> |
          <a routerLink="checkbox" routerLinkActive="active">Checkbox</a>  |
          <a routerLink="datepicker" routerLinkActive="active">Datepicker</a> |
          <a routerLink="formfield" routerLinkActive="active">Form field</a> |
          <a routerLink="input" routerLinkActive="active">Input</a> |
          <a routerLink="radiobutton" routerLinkActive="active">Radio button</a> |
          <a routerLink="select" routerLinkActive="active">Select</a> |
          <a routerLink="slider" routerLinkActive="active">Slider</a> |
          <a routerLink="slidetoggle" routerLinkActive="active">Slide toggle</a>

          <h4>Navigation</h4>
          <a routerLink="menu" routerLinkActive="active">Menu</a> |
          <a routerLink="sidenav" routerLinkActive="active">Sidenav</a> |
          <a routerLink="toolbar" routerLinkActive="active">Toolbar</a>

          <h4>Layout</h4>
          <a routerLink="card" routerLinkActive="active">Card</a> |
          <a routerLink="divider" routerLinkActive="active">Divider</a> |
          <a routerLink="expansionpanel" routerLinkActive="active">Expansion Panel</a> |
          <a routerLink="gridlist" routerLinkActive="active">Grid List</a> |
          <a routerLink="list" routerLinkActive="active">List</a> |
          <a routerLink="autocomplete" routerLinkActive="active">Autocomplete</a> |
          <a routerLink="autocomplete" routerLinkActive="active">Autocomplete</a>

          <h4>Buttons &amp; Indicators</h4>
          <a routerLink="button" routerLinkActive="active">Button</a> |
          <a routerLink="buttontoggle" routerLinkActive="active">Button Toggle</a> |
          <a routerLink="chips" routerLinkActive="active">Chips</a> |
          <a routerLink="icon" routerLinkActive="active">Icon</a> |
          <a routerLink="progressspinner" routerLinkActive="active">Progress Spinner</a> |
          <a routerLink="progressbar" routerLinkActive="active">Progress Bar</a>

          <h4>Popups &amp; Modals</h4>
          <a routerLink="dialog" routerLinkActive="active">Dialog</a> |
          <a routerLink="snackbar" routerLinkActive="active">Snackbar</a> |
          <a routerLink="tooltip" routerLinkActive="active">Tooltip</a>

          <h4>Data Tables</h4>
          <a routerLink="paginator" routerLinkActive="active">Paginator</a> |
          <a routerLink="sortheader" routerLinkActive="active">Sort Header</a> |
          <a routerLink="table" routerLinkActive="active">Table</a>
        </nav>
        <ea-panel class="content-panel">
          <router-outlet></router-outlet>
        </ea-panel>
      </div>
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
  { path: 'themepicker', component: ThemePickerPageComponent },
  { path: '', redirectTo: 'panel', pathMatch: 'full' }
]

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PanelPageComponent,
    ButtonPageComponent,
    ThemePickerPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    PanelModule,
    ThemePickerModule
  ],
  providers: [LoggingService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
