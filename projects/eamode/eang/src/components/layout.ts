import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  HostBinding
} from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'

export class Layout {
  config = {
    drawer: { state: 'maximized' }
  }

  private readonly configSubject = new BehaviorSubject<any>(this.config)
  config$ = this.configSubject.asObservable()
  drawerState$ = this.config$.pipe(map(x => x.drawer.state))

  openDrawer() {
    if (this.config.drawer.state !== 'maximized') {
      this.config.drawer.state = 'maximi'
      this.configSubject.next(this.config)
    }
  }

  closeDrawer() {
    if (this.config.drawer.state !== 'closed') {
      this.config.drawer.state = 'closed'
      this.configSubject.next(this.config)
    }
  }
}

@Component({
  selector: 'ea-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div overlay></div>
    <ng-content select="ea-toolbar"></ng-content>
    <ng-content select="ea-body"></ng-content>
    <ng-content select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {
  @HostBinding('attr.nav-overlay') stateAttr

  @Input() drawerState$: Observable<string>

  @Input() layoutTest = new Layout()

  constructor() {}

  ngOnInit() {
    // if (this.drawerState$) {
    //   this.drawerState$.subscribe(this.layout.drawerState$)
    // }
    // this.layout.breakpoint$.subscribe(b => {
    //   this.layout.screenSize = b
    //   this.layout.isDrawerOverlay = b === 'XSmall' ? true : false
    //   this.stateAttr = this.layout.isDrawerOverlay ? '' : null
    //   if (this.layout.isDrawerOverlay) {
    //     this.layout.drawerState$.next('closed')
    //   }
    // })
  }
}
