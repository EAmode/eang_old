import { Component, ChangeDetectionStrategy } from '@angular/core'
import { LayoutService } from '../services/layout.service'

@Component({
  selector: 'ea-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div overlay *ngIf="(layout.drawerState$ | async) !== 'closed'" (click)="layout.drawerState$.next('closed')"></div>
  <ng-content select="ea-toolbar"></ng-content>
  <ng-content select="ea-main"></ng-content>
  <ng-content select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class Layout {
  constructor(public layout: LayoutService) {}
}
