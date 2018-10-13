import { Component } from '@angular/core'
import { LayoutService } from 'projects/eamode/eang/src/services/layout.service'

@Component({
  selector: 'eangio-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'eang-io'

  constructor (public layout: LayoutService) {}
}
