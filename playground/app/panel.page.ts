import { Component } from '@angular/core'
import { timer, BehaviorSubject, Observable } from 'rxjs'
import { map, share } from 'rxjs/operators'

@Component({
  selector: 'pg-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.css']
})
export class PanelPageComponent {
  panelState = new BehaviorSubject<string>('maximized')
  panelOrientation = new BehaviorSubject<string>('top')

  constructor() {}

  changeState(state: string) {
    this.panelState.next(state)
  }
}
