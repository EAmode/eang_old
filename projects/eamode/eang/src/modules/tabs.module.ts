import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TabsComponent } from '../components/tabs'
import { TabComponent } from '../components/tab'
import { MenuModule } from './menu.module'

export * from '../components/tabs'
export * from '../components/tab'

@NgModule({
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent],
  imports: [CommonModule, MenuModule]
})
export class TabsModule {}
