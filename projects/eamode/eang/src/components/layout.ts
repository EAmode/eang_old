import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'

export class Layout {
  config = {
    theme: 'mode',
    colorScheme: 'default',
    drawer: { state: 'maximized' }
  }

  private readonly configSubject = new BehaviorSubject<any>(this.config)
  config$ = this.configSubject.asObservable()
  drawerState$ = this.config$.pipe(map(x => x.drawer.state))

  openDrawer() {
    if (this.config.drawer.state !== 'maximized') {
      this.config.drawer.state = 'maximized'
      this.configSubject.next(this.config)
    }
  }

  closeDrawer() {
    if (this.config.drawer.state !== 'closed') {
      this.config.drawer.state = 'closed'
      this.configSubject.next(this.config)
    }
  }

  changeColorScheme(scheme: 'default' | 'dark' | 'light') {
    if (this.config.colorScheme !== scheme) {
      const element = document.getElementsByClassName(this.config.theme)[0]
      if (scheme === 'dark') {
        element.classList.add('ea-color-scheme-dark')
      } else if (scheme === 'light') {
        element.classList.remove('ea-color-scheme-dark')
      }
      this.config.colorScheme = scheme
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
export class LayoutComponent {
  @HostBinding('attr.nav-overlay') stateAttr

  @Input() drawerState$: Observable<string>

  @Input() layoutTest = new Layout()

  constructor() {}

  // ngOnInit() {
  //   if (this.drawerState$) {
  //     this.drawerState$.subscribe(this.layout.drawerState$)
  //   }
  //   this.layout.breakpoint$.subscribe(b => {
  //     this.layout.screenSize = b
  //     this.layout.isDrawerOverlay = b === 'XSmall' ? true : false
  //     this.stateAttr = this.layout.isDrawerOverlay ? '' : null
  //     if (this.layout.isDrawerOverlay) {
  //       this.layout.drawerState$.next('closed')
  //     }
  //   })
  // }
}
