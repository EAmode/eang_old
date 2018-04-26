/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component, OnInit } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { RouterModule, Routes } from '@angular/router'

import { PanelModule, LoggingService, ThemePickerModule, AutoCompleteModule } from 'eang'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { PanelPageComponent } from './app/panel'
import { ButtonPageComponent } from './app/button'
import { ThemePickerPageComponent } from './app/themepicker'
import { HeroDetailComponent } from './app/hero-detail.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HeroService } from './app/hero.service'

@Component({
  selector: 'pg-root',
  template: `
      <header>
        <h1>eang Playground</h1>
      </header>
      <div class="pg-container-main">
        <nav>
          <h4>Basics</h4>
          <a routerLink="panel" routerLinkActive="active">Panel</a><br />
          <a routerLink="button" routerLinkActive="active">Button</a><br />

          <h4>Form Controls</h4>
          <a routerLink="autocomplete" routerLinkActive="active">Autocomplete</a>
          <a routerLink="checkbox" routerLinkActive="active">Checkbox</a><br />
          <a routerLink="datepicker" routerLinkActive="active">Datepicker</a><br />
          <a routerLink="formfield" routerLinkActive="active">Form field</a><br />
          <a routerLink="input" routerLinkActive="active">Input</a><br />
          <a routerLink="radiobutton" routerLinkActive="active">Radio button</a><br />
          <a routerLink="select" routerLinkActive="active">Select</a><br />
          <a routerLink="slider" routerLinkActive="active">Slider</a><br />
          <a routerLink="slidetoggle" routerLinkActive="active">Slide toggle</a>

          <h4>Navigation</h4>
          <a routerLink="menu" routerLinkActive="active">Menu</a><br />
          <a routerLink="sidenav" routerLinkActive="active">Sidenav</a><br />
          <a routerLink="toolbar" routerLinkActive="active">Toolbar</a>

          <h4>Layout</h4>
          <a routerLink="card" routerLinkActive="active">Card</a><br />
          <a routerLink="divider" routerLinkActive="active">Divider</a><br />
          <a routerLink="expansionpanel" routerLinkActive="active">Expansion Panel</a><br />
          <a routerLink="gridlist" routerLinkActive="active">Grid List</a><br />
          <a routerLink="list" routerLinkActive="active">List</a>

          <h4>Buttons &amp; Indicators</h4>
          <a routerLink="button" routerLinkActive="active">Button</a><br />
          <a routerLink="buttontoggle" routerLinkActive="active">Button Toggle</a><br />
          <a routerLink="chips" routerLinkActive="active">Chips</a><br />
          <a routerLink="icon" routerLinkActive="active">Icon</a><br />
          <a routerLink="progressspinner" routerLinkActive="active">Progress Spinner</a><br />
          <a routerLink="progressbar" routerLinkActive="active">Progress Bar</a>

          <h4>Popups &amp; Modals</h4>
          <a routerLink="dialog" routerLinkActive="active">Dialog</a><br />
          <a routerLink="snackbar" routerLinkActive="active">Snackbar</a><br />
          <a routerLink="tooltip" routerLinkActive="active">Tooltip</a>

          <h4>Data Tables</h4>
          <a routerLink="paginator" routerLinkActive="active">Paginator</a><br />
          <a routerLink="sortheader" routerLinkActive="active">Sort Header</a><br />
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
  { path: 'autocomplete', component: HeroDetailComponent }, // FIXME
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
    ThemePickerPageComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    PanelModule,
    ThemePickerModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  exports: [],
  providers: [LoggingService, HeroService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
