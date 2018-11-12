import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

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
import { LayoutComponent } from './feature/layout/layout.component'
import { ButtonComponent } from './feature/button/button.component'
import { HomeComponent } from './feature/home/home.component'
import { CardComponent } from './feature/card/card.component'
import { IconComponent } from './feature/icon/icon.component'
import { VariablesComponent } from './variables/variables.component'
import { GetStartedComponent } from './feature/get-started/get-started.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'theming', component: ThemingComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'card', component: CardComponent },
  { path: 'icon', component: IconComponent },
  { path: 'variables', component: VariablesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    ThemingComponent,
    LayoutComponent,
    ButtonComponent,
    HomeComponent,
    CardComponent,
    IconComponent,
    VariablesComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LayoutModule,
    AutoCompleteModule,
    PanelModule,
    ThemePickerModule,
    MarkdownModule,
    MdcButtonModule,
    MdcRippleModule,
    MdcRadioModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
