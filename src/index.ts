import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { AutocompleteComponent } from './components/autocomplete'
import { MenuComponent, MenuItemComponent, ModeMenuItemComponent } from './components/menu'
import { MarkdownComponent } from './components/markdown'
import { PanelComponent } from './components/panel'
export * from './components/autocomplete'
export * from './components/menu'
export * from './components/markdown'
export * from './components/panel'

import { StateMachineService } from './services/state-machine'
export * from './services/state-machine'

@NgModule({
  declarations: [
    AutocompleteComponent,
    MenuComponent,
    MenuItemComponent,
    ModeMenuItemComponent,
    MarkdownComponent,
    PanelComponent],
  exports: [
    AutocompleteComponent,
    MenuComponent,
    MenuItemComponent,
    ModeMenuItemComponent,
    MarkdownComponent,
    PanelComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EangModule { }
