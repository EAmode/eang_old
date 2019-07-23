import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
  HostBinding
} from '@angular/core'
import { Subject } from 'rxjs'
import { LayoutService } from '../services/layout.service'

@Component({
  selector: 'ea-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="(drawerState$ | async) !== 'closed'">
      <ng-content select="header"></ng-content>
      <ng-content select="section"></ng-content>
      <ng-content select="footer"></ng-content>
      <ng-content></ng-content>
    </ng-container>
  `,
  styles: []
})
export class Drawer implements OnInit, OnDestroy {
  @HostBinding('attr.state') stateAttr

  @Input() drawerState$: Subject<string>

  constructor(public layout: LayoutService) {}

  ngOnInit() {
    this.layout.drawerState$.subscribe(d => {
      this.stateAttr = d
    })
  }

  ngOnDestroy() {}
}
