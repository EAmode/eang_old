import { Component, OnInit } from '@angular/core'
import { LayoutService } from '@eamode/eang'

@Component({
  selector: 'eangio-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {
  constructor(public layout: LayoutService) {}

  shouldOpenDrawer() {
    if (!this.layout.isDrawerOverlay) {
      this.layout.drawerState$.next('maximized')
    }
  }

  ngOnInit() {}
}
