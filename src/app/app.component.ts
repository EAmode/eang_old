import { Component } from '@angular/core'
import { LayoutService } from 'projects/eamode/eang/src/services/layout.service'

@Component({
  selector: 'eangio-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(public layout: LayoutService) {}

  shouldCloseDrawer() {
    if (this.layout.isDrawerOverlay) {
      this.layout.drawerState$.next('closed')
    }
  }

  onActivate(e, scrollContainer) {
    document.getElementsByTagName('ea-main')[0].scrollTop = 0
  }
}
