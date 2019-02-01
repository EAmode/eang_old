import { Component, Input, HostBinding } from '@angular/core'

@Component({
  selector: 'ea-tab',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class TabComponent {
  @HostBinding('attr.active') active
  @HostBinding('attr.closed') closed

  @Input() name: string
  @Input() closeable = false

  constructor() {}
}
