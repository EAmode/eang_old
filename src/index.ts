import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { AutocompleteComponent } from './components/autocomplete'
import { MenuTreeComponent } from './components/menu-tree'

export * from './components/autocomplete'
export * from './components/menu-tree'

@NgModule({
  declarations: [AutocompleteComponent, MenuTreeComponent],
  exports: [AutocompleteComponent, MenuTreeComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EangModule { }
