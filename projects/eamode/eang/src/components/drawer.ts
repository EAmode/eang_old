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
  OnDestroy,
  HostBinding
} from '@angular/core'
import { Observable, Subscription, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators'
import { LayoutService } from '../services/layout.service'

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

  @HostBinding('attr.state') stateAttr


  @Input() drawerState$: Subject<string>


  constructor(public layout: LayoutService) {
  }

  ngOnInit() {
    if (!this.drawerState$) {
      this.drawerState$ = new Subject<string>()
    }

    this.drawerState$.subscribe(d => {
      this.stateAttr = d
    })

    this.drawerState$.next('maximized')
  }

  ngOnDestroy() {}
}
