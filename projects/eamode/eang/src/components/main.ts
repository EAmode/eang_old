import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'ea-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `
})
export class Main {
  constructor() {}
}
