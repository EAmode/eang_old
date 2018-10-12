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
import { LayoutService, DrawerState } from '../services/layout.service'

@Component({
  selector: 'ea-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-content select="header"></ng-content>
  <ng-content select="section"></ng-content>
  <ng-content select="footer"></ng-content>
  <ng-content></ng-content>
  `,
  styles: []
})
export class Drawer implements OnInit, OnDestroy {

  constructor(public layout: LayoutService) {}

  ngOnInit() {
    this.layout.drawerState$.next(DrawerState.maximized)
  }

  ngOnDestroy() {}
}
