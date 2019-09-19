import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'ea-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="ea-main"></ng-content>
    <ng-content select="ea-footer"></ng-content>
  `
})
export class Body {
  constructor() {}
}
