import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  selector: 'pg-panel',
  templateUrl: './panel.html',
  styleUrls: ['./panel.css']
})
export class PanelPageComponent {
  panelState = new BehaviorSubject<string>('maximized')
  panelOrientation = new BehaviorSubject<string>('left')

  constructor() {}

  changeState(state: string) {
    this.panelState.next(state)
  }
}
