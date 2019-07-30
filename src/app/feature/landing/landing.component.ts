import { Component, OnInit } from '@angular/core'
import { LayoutService } from '@eamode/eang'
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
  constructor(public layout: LayoutService) {}

  shouldOpenDrawer() {
    if (!this.layout.isDrawerOverlay) {
      this.layout.drawerState$.next('maximized')
    }
  }

  ngOnInit() {}

  onChange(evt): void {
    this.panelState.next(evt.value)
  }
}
