import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LayoutComponent } from '../components/layout'
import { Toolbar } from '../components/toolbar'
import { Body } from '../components/body'
import { Drawer } from '../components/drawer'
import { Footer } from '../components/footer'
import { Main } from '../components/main'

export * from '../components/layout'
export * from '../components/toolbar'
export * from '../components/body'
export * from '../components/drawer'
export * from '../components/footer'
export * from '../components/main'

@NgModule({
  declarations: [LayoutComponent, Toolbar, Main, Drawer, Footer, Body],
  exports: [LayoutComponent, Toolbar, Main, Drawer, Footer, Body],
  imports: [CommonModule]
})
export class LayoutModule {}
