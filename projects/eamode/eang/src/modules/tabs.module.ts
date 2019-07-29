import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  TabListComponent,
  TabpanelComponent,
  TabpanelGroupComponent,
  TabComponent,
  TabsComponent
} from '../components/tabs'
import { MenuModule } from './menu.module'

export * from '../components/tabs'

@NgModule({
  declarations: [
    TabListComponent,
    TabpanelComponent,
    TabpanelGroupComponent,
    TabComponent,
    TabsComponent
  ],
  exports: [
    TabListComponent,
    TabpanelComponent,
    TabpanelGroupComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [CommonModule, MenuModule]
})
export class TabsModule {}
