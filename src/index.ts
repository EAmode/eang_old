import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { AutocompleteComponent } from './components/autocomplete'
import { MenuTreeComponent } from './components/menu-tree'
import { MarkdownComponent } from './components/markdown'
import { PanelComponent } from './components/panel'

export * from './components/autocomplete'
export * from './components/menu-tree'
export * from './components/markdown'
export * from './components/panel'

@NgModule({
  declarations: [
    AutocompleteComponent,
    MenuTreeComponent,
    MarkdownComponent,
    PanelComponent],
  exports: [
    AutocompleteComponent,
    MenuTreeComponent,
    MarkdownComponent,
    PanelComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EangModule { }
