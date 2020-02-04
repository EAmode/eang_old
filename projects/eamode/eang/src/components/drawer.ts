import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
  HostBinding
} from '@angular/core'
import { Subject } from 'rxjs'
import { LayoutService, EaLayout } from '../services/layout.service'

@Component({
  selector: 'ea-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="stateAttr !== 'closed'">
      <ng-content select="header"></ng-content>
      <ng-content select="section"></ng-content>
      <ng-content select="footer"></ng-content>
      <ng-content></ng-content>
    </ng-container>
  `,
  styles: []
})
export class Drawer implements OnInit, OnDestroy {
  @HostBinding('attr.state') stateAttr: string

  @Input() drawerState$: Subject<string>
  @Input() layoutTest: EaLayout

  constructor(public layout: LayoutService) {}

  ngOnInit() {
    this.layout.drawerState$.subscribe(d => {
      this.stateAttr = d
    })

    if (this.layoutTest) {
      this.layoutTest.config$.subscribe(x => {
        if (this.stateAttr !== x.drawerState) {
          this.stateAttr = x.drawerState
        }
      })
    }
  }

  ngOnDestroy() {}
}
