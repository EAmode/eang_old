import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AutocompleteComponent } from '../components/autocomplete'
import { ReactiveFormsModule } from '@angular/forms'
export * from '../components/autocomplete'

@NgModule({
  declarations: [AutocompleteComponent],
  exports: [AutocompleteComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AutoCompleteModule {}
