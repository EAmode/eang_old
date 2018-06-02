import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  HostBinding,
  ElementRef,
  Renderer
} from '@angular/core'
import { of, Observable, combineLatest } from 'rxjs'
import { hostElement } from '@angular/core/src/render3/instructions'

@Component({
  selector: 'ea-panel',
  template: `<ng-content></ng-content>`
})
export class PanelComponent implements OnInit {
  @HostBinding('attr.state') stateAttr
  @Input() state = of('maximized')
  @HostBinding('attr.orientation') orientationAttr
  @Input() orientation = of('top')
  hostElement
  private sub
  constructor(private _renderer: Renderer, public currentElement: ElementRef) {}
  ngOnInit(): void {
    console.log(this.currentElement.nativeElement.parentElement)
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
    console.log(this.stateAttr)
    if (typeof this.state === 'string') {
      this.state = of(this.state)
    }
    if (typeof this.orientation === 'string') {
      this.orientation = of(this.orientation)
    }

    this.sub = combineLatest(this.state, this.orientation).subscribe(
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
}
