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
import { Observable, Subscription, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators'
import { LayoutService } from '../services/layout.service'

@Component({
  selector: 'ea-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div overlay *ngIf="(drawerState$ | async) !== 'closed'" (click)="closeDrawer()"></div>
  <ng-content select="ea-toolbar"></ng-content>
  <ng-content select="ea-main"></ng-content>
  <ng-content select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class Layout implements OnInit, OnDestroy {
  @Input() drawerState$: Subject<string>

  constructor(public layout: LayoutService) {}

  ngOnInit() {}

  closeDrawer() {
    this.drawerState$.next('closed')
  }

  ngOnDestroy() {}
}
