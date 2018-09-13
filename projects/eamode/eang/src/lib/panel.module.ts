import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PanelComponent } from './panel'
export * from './panel'

@NgModule({
  declarations: [PanelComponent],
  exports: [PanelComponent],
  imports: [CommonModule]
})
export class PanelModule {}
