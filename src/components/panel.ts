import { Component, Input, OnInit, AfterViewInit, HostBinding } from '@angular/core'
import { of, Observable, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'ea-panel',
  template: `<div [class]="classNames | async"><ng-content></ng-content></div>`
})
export class PanelComponent implements OnInit {
  @HostBinding('attr.state') attrState = ''
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
      map(
        ([state, orientation]) => `ea-panel-container ${state} ${orientation}`
      )
    )
  }
}
