import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Layout } from '../components/layout'
import { Toolbar } from '../components/toolbar'
import { Body } from '../components/body'
import { Drawer } from '../components/drawer'
import { Footer } from '../components/footer'
import { PanelModule } from './panel.module'

export * from '../components/layout'
export * from '../components/toolbar'
export * from '../components/body'
export * from '../components/drawer'
export * from '../components/footer'

@NgModule({
  declarations: [Layout, Toolbar, Body, Drawer, Footer],
  exports: [Layout, Toolbar, Body, Drawer, Footer],
  imports: [CommonModule, PanelModule]
})
export class LayoutModule {}
