import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Layout } from '../components/layout'
import { Toolbar } from '../components/toolbar'
import { Body } from '../components/body'
import { Drawer } from '../components/drawer'
import { Footer } from '../components/footer'
import { PanelModule } from './panel.module'
import { Main } from '../components/main'
import { LayoutService } from '../services/layout.service'

export * from '../components/layout'
export * from '../components/toolbar'
export * from '../components/body'
export * from '../components/drawer'
export * from '../components/footer'
export * from '../components/main'
export * from '../services/layout.service'

@NgModule({
  declarations: [Layout, Toolbar, Main, Drawer, Footer, Body],
  exports: [Layout, Toolbar, Main, Drawer, Footer, Body],
  imports: [CommonModule, PanelModule],
  providers: [LayoutService]
})
export class LayoutModule {}
