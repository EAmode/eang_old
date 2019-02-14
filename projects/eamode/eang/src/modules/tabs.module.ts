import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  TabListComponent,
  TabpanelComponent,
  TabpanelGroupComponent
} from '../components/tabs'
import { MenuModule } from './menu.module'

export * from '../components/tabs'

@NgModule({
  declarations: [TabListComponent, TabpanelComponent, TabpanelGroupComponent],
  exports: [TabListComponent, TabpanelComponent, TabpanelGroupComponent],
  imports: [CommonModule, MenuModule]
})
export class TabsModule {}
