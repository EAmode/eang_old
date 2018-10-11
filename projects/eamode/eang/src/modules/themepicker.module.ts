import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemePickerComponent } from '../components/themepicker'
export * from '../components/themepicker'

@NgModule({
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
  imports: [CommonModule]
})
export class ThemePickerModule {}
