import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Body } from '../components/body'
import { Drawer } from '../components/drawer'
import { Footer } from '../components/footer'

export * from '../components/layout'
export * from '../components/header'
export * from '../components/body'
export * from '../components/drawer'
export * from '../components/footer'

@NgModule({
  declarations: [Layout, Header, Body, Drawer, Footer],
  exports: [Layout, Header, Body, Drawer, Footer],
  imports: [CommonModule]
})
export class LayoutModule {}
