import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'ea-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="header"></ng-content>
    <ng-content select="section"></ng-content>
    <ng-content select="aside"></ng-content>
    <ng-content></ng-content>
  `,
  styles: []
})
export class Toolbar {
  constructor() {}
}
