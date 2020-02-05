import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
  HostBinding
} from '@angular/core'

@Component({
  selector: 'ea-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="state !== 'closed'">
      <ng-content select="header"></ng-content>
      <ng-content select="section"></ng-content>
      <ng-content select="footer"></ng-content>
      <ng-content></ng-content>
    </ng-container>
  `,
  styles: []
})
export class Drawer implements OnInit, OnDestroy {
  @HostBinding('attr.state')
  @Input()
  state: string

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
