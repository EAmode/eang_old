import { Component, Input, OnInit, AfterViewInit } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { combineLatest } from 'rxjs/observable/combineLatest'
import { map } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

@Component({
  selector: 'ea-panel',
  template: `<div id="ea-panel-container" [class]="classNames | async"><ng-content></ng-content></div>`
})
export class PanelComponent implements OnInit {
  @Input() state = of('maximized')
  @Input() orientation = of('top')
  classNames: Observable<string>
  stateName: any

  ngOnInit(): void {
    if (typeof this.state === 'string') {
      this.state = of(this.state)
    }
    if (typeof this.orientation === 'string') {
      this.orientation = of(this.orientation)
    }

    this.classNames = combineLatest(this.state, this.orientation).pipe(
      map(([state, orientation]) => `${state} ${orientation}`)
    )
  }
}
