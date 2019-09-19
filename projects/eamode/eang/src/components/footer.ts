import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'ea-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `
})
export class Footer {
  constructor() {}
}
