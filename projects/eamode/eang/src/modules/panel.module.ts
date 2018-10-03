import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PanelComponent } from '../components/panel'
export * from '../components/panel'

@NgModule({
  declarations: [PanelComponent],
  exports: [PanelComponent],
  imports: [CommonModule]
})
export class PanelModule {}
