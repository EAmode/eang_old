import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { AutocompleteComponent } from './components/autocomplete'
import { MenuTreeComponent } from './components/menu-tree'
import { MarkdownComponent } from './components/markdown'

export * from './components/autocomplete'
export * from './components/menu-tree'
export * from './components/markdown'

@NgModule({
  declarations: [
    AutocompleteComponent,
    MenuTreeComponent,
    MarkdownComponent],
  exports: [
    AutocompleteComponent,
    MenuTreeComponent,
    MarkdownComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EangModule { }
