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
  selector: 'ea-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-content select="ea-toolbar"></ng-content>
  <ng-content select="ea-main"></ng-content>
  <ng-content select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class Layout implements OnInit, OnDestroy {
  constructor(public layout: LayoutService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
