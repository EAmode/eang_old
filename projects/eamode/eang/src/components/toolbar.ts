import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild,
  ViewChild,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators'
import { LayoutService } from '../services/layout.service'

@Component({
  selector: 'ea-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-container *ngIf="(layout.drawerState$ | async) as drawerState">
    <button custom *ngIf="drawerState === 'maximized'" (click)="layout.drawerState$.next('closed')">
     <span role="icon" style="--ea-button-icon: var(--ea-icon-chevrons-left); --ea-icon-margin: 0; height: 2em;" icon></span>
    </button>
    <button custom *ngIf="drawerState === 'closed'" (click)="layout.drawerState$.next('maximized')">
      <span role="icon" style="--ea-button-icon: var(--ea-icon-hamburger-menu); --ea-icon-margin: 0;" icon></span>
    </button>
  </ng-container>
  <ng-content select="header"></ng-content>
  <ng-content select="section"></ng-content>
  <ng-content select="aside"></ng-content>
  <ng-content></ng-content>
  `,
  styles: []
})
export class Toolbar implements OnInit, OnDestroy {

  constructor(public layout: LayoutService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
