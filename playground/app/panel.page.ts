import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  selector: 'pg-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.css']
})
export class PanelPageComponent {
  panelState = new BehaviorSubject<string>('maximized')
  panelOrientation = new BehaviorSubject<string>('right')

  constructor() {}

  changeState(state: string) {
    this.panelState.next(state)
  }
}
