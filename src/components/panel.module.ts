import { NgModule } from '@angular/core'
import { PanelComponent } from './panel'
export * from './panel'

@NgModule({
  declarations: [PanelComponent],
  exports: [PanelComponent]
})
export class PanelModule {}
