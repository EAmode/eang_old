import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, timer } from 'rxjs'
import { map, share } from 'rxjs/operators'
@Component({
  selector: 'eangio-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  panelState = new BehaviorSubject<string>('maximized')
  orientations = ['top', 'right', 'bottom', 'left']
  panelOrientation = timer(0, 1500).pipe(
    map(i => this.orientations[i % this.orientations.length]),
    share()
  )
  constructor() {}

  ngOnInit() {}

  onChange(evt): void {
    this.panelState.next(evt.value)
  }
}
