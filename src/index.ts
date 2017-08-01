import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { AutocompleteComponent } from './components/autocomplete'

export * from './components/autocomplete'

@NgModule({
  declarations: [AutocompleteComponent],
  exports: [AutocompleteComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EangModule { }
