import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemePickerComponent } from './themepicker'
export * from './themepicker'

@NgModule({
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
  imports: [CommonModule]
})
export class ThemePickerModule {}
