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
    <button *ngIf="drawerState === 'maximized'" (click)="layout.drawerState$.next('closed')">PRESS HERE</button>
    <button *ngIf="drawerState === 'closed'" (click)="layout.drawerState$.next('maximized')">BUTTON</button>
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
