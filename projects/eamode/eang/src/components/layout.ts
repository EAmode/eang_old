import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  HostBinding
} from '@angular/core'
import { LayoutService } from '../services/layout.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'ea-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      overlay
      *ngIf="(layout.drawerState$ | async) !== 'closed'"
      (click)="layout.drawerState$.next('closed')"
    ></div>
    <ng-content select="ea-toolbar"></ng-content>
    <ng-content select="ea-main"></ng-content>
    <ng-content select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class Layout implements OnInit {
  @HostBinding('attr.nav-overlay')
  stateAttr

  @Input()
  drawerState$: Observable<string>

  constructor(public layout: LayoutService) {}

  ngOnInit() {
    if (this.drawerState$) {
      this.drawerState$.subscribe(this.layout.drawerState$)
    }

    this.layout.breakpoint$.subscribe(b => {
      this.layout.screenSize = b
      this.layout.isDrawerOverlay = b === 'XSmall' ? true : false
      this.stateAttr = this.layout.isDrawerOverlay ? '' : null
      if (this.layout.isDrawerOverlay) {
        this.layout.drawerState$.next('closed')
      }
    })
  }
}
