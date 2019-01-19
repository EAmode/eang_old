import {
  Component,
  Input,
  OnInit,
  HostBinding,
  ElementRef,
  Renderer,
  OnDestroy
} from '@angular/core'
import { of, combineLatest, Subscription, Observable } from 'rxjs'

@Component({
  selector: 'ea-panel',
  template: `
    <ng-content></ng-content>
  `
})
export class PanelComponent implements OnInit, OnDestroy {
  @HostBinding('attr.state') stateAttr
  @Input() state: Observable<string> = of('maximized')
  @HostBinding('attr.orientation') orientationAttr
  @Input() orientation = of('top')
  hostElement
  private _sub: Subscription

  constructor(private _renderer: Renderer, public currentElement: ElementRef) {}

  ngOnInit() {
    if (
      this.currentElement &&
      this.currentElement.nativeElement.parentElement
    ) {
      this.hostElement = this.currentElement.nativeElement.parentElement
      this._renderer.setElementClass(
        this.hostElement,
        'ea-panel-host-element',
        true
      )
    }
    if (typeof this.state === 'string') {
      this.state = of(this.state)
    }
    if (typeof this.orientation === 'string') {
      this.orientation = of(this.orientation)
    }

    this._sub = combineLatest(this.state, this.orientation).subscribe(
      ([state, orientation]) => {
        this.stateAttr = state
        this.orientationAttr = orientation
        if (this.hostElement) {
          this._renderer.setElementAttribute(
            this.hostElement,
            'ea-panel-host-state',
            state
          )
          this._renderer.setElementAttribute(
            this.hostElement,
            'ea-panel-host-orientation',
            orientation
          )
        }
      }
    )
  }

  ngOnDestroy(): void {
    if (this._sub) {
      this._sub.unsubscribe()
    }
  }
}
