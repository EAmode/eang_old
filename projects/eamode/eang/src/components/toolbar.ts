import { Component, ChangeDetectionStrategy } from '@angular/core'
import { LayoutService } from '../services/layout.service'

@Component({
  selector: 'ea-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-container *ngIf="(layout.drawerState$ | async) as drawerState">
    <button icon flat *ngIf="drawerState === 'maximized'" (click)="layout.drawerState$.next('closed')">
     <span icon negative chevrons-left style="--ea-icon-margin: 0; height: 2em; width: 2em;"></span>
    </button>
    <button icon flat *ngIf="drawerState === 'closed'" (click)="layout.drawerState$.next('maximized')">
      <span icon negative hamburger-menu style="--ea-icon-margin: 0; height: 2em; width: 2em;"></span>
    </button>
  </ng-container>
  <ng-content select="header"></ng-content>
  <ng-content select="section"></ng-content>
  <ng-content select="aside"></ng-content>
  <ng-content></ng-content>
  `,
  styles: []
})
export class Toolbar {
  constructor(public layout: LayoutService) {}
}
