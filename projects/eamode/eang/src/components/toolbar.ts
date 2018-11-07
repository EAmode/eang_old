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
    <button icon *ngIf="drawerState === 'maximized'" (click)="layout.drawerState$.next('closed')">
     <span icon negative chevrons-left style="--ea-icon-margin: 0; height: 2em; width: 2em;"></span>
    </button>
    <button icon *ngIf="drawerState === 'closed'" (click)="layout.drawerState$.next('maximized')">
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
export class Toolbar implements OnInit, OnDestroy {
  constructor(public layout: LayoutService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
