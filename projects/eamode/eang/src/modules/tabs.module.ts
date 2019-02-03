import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  TabListComponent,
  TabComponent,
  TabPanelComponent
} from '../components/tabs'
import { MenuModule } from './menu.module'

export * from '../components/tabs'

@NgModule({
  declarations: [TabListComponent, TabComponent, TabPanelComponent],
  exports: [TabListComponent, TabComponent, TabPanelComponent],
  imports: [CommonModule, MenuModule]
})
export class TabsModule {}
