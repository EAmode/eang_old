import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core'

@Component({
  selector: 'ea-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="state !== 'closed'">
      <ng-content></ng-content>
    </ng-container>
  `,
  styles: []
})
export class Drawer {
  @HostBinding('attr.state')
  @Input()
  state: string

  constructor() {}
}
