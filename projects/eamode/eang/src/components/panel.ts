import {
  Component,
  Input,
  OnInit,
  HostBinding,
  ElementRef,
  OnDestroy,
  Renderer2
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

  constructor(
    private _renderer: Renderer2,
    public currentElement: ElementRef
  ) {}

  ngOnInit() {
    if (
      this.currentElement &&
      this.currentElement.nativeElement.parentElement
    ) {
      this.hostElement = this.currentElement.nativeElement.parentElement
      this._renderer.addClass(this.hostElement, 'ea-panel-host-element')
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
          __ngRendererSetElementAttributeHelper(
            this._renderer,
            this.hostElement,
            'ea-panel-host-state',
            state
          )
          __ngRendererSetElementAttributeHelper(
            this._renderer,
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

type AnyDuringRendererMigration = any

function __ngRendererSplitNamespaceHelper(name: AnyDuringRendererMigration) {
  if (name[0] === ':') {
    const match = name.match(/^:([^:]+):(.+)$/)
    return [match[1], match[2]]
  }
  return ['', name]
}

function __ngRendererSetElementAttributeHelper(
  renderer: AnyDuringRendererMigration,
  element: AnyDuringRendererMigration,
  namespaceAndName: AnyDuringRendererMigration,
  value?: AnyDuringRendererMigration
) {
  const [namespace, name] = __ngRendererSplitNamespaceHelper(namespaceAndName)
  if (value != null) {
    renderer.setAttribute(element, name, value, namespace)
  } else {
    renderer.removeAttribute(element, name, namespace)
  }
}
