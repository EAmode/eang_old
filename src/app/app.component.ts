import { Component } from '@angular/core'

@Component({
  selector: 'eangio-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'eang-io'

  drawer = true

  drawerToggle() {
    this.drawer = !this.drawer
  }
}
