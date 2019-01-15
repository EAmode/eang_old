import { Component, Input, HostBinding } from '@angular/core'

@Component({
  selector: 'ea-tab',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class TabComponent {
  @HostBinding('attr.active') activeAttr
  @HostBinding('attr.closed') closedAttr

  @Input() name: string
  @Input() closeable = false

  constructor() {}
}
