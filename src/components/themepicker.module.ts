import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemePickerComponent } from './themepicker'
export * from './panel'

@NgModule({
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
  imports: [CommonModule]
})
export class ThemePickerModule {}
