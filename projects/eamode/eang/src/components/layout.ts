import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  OnChanges
} from '@angular/core'
import {
  Observable,
  BehaviorSubject,
  fromEventPattern,
  of,
  interval
} from 'rxjs'
import { map, share, catchError } from 'rxjs/operators'

export class Layout {
  private readonly configSubject = new BehaviorSubject<any>(this.config)
  config$ = this.configSubject.pipe(share())
  drawerState$ = this.config$.pipe(map(x => x.drawer.state))
  // drawerOverlay$ = this.config$.pipe(
  //   map(x => {
  //     return x.drawer.overlay.toString()
  //   }),
  //   catchError(val => {
  //     return of(`I caught: ${val}`)
  //   })
  // )

  drawerOverlay$ = interval(1000).pipe(
    map(i => {
      return i % 2 === 0
    })
  )

  constructor(
    public config = {
      theme: 'mode',
      colorScheme: 'default',
      drawerOverlayMediaQuery: '(max-width: 600px)',
      drawer: { state: 'maximized', overlay: 'true' }
    }
  ) {
    // if (config.drawerOverlayMediaQuery) {
    //   const mql = window.matchMedia(config.drawerOverlayMediaQuery)
    //   const mediaObserver = fromEventPattern<MediaQueryListEvent>(
    //     mql.addListener.bind(mql),
    //     mql.removeListener.bind(mql)
    //   )
    //   mediaObserver.pipe(map(x => x.matches)).subscribe(x => {
    //     const clone = Object.assign({}, this.config)
    //     clone.drawer.overlay = x.toString()
    //     this.configSubject.next(clone)
    //     console.log(clone)
    //   })
    // }
  }

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

  toggleDrawer() {
    if (this.config.drawer.state === 'closed') {
      this.config.drawer.state = 'maximized'
      this.configSubject.next(this.config)
    } else {
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
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div overlay *ngIf="draweroverlay === 'true'"></div>
    <ng-content select="ea-toolbar"></ng-content>
    <ng-content select="ea-body"></ng-content>
    <ng-content select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class LayoutComponent implements OnChanges {
  // _draweroverlay: string
  // set draweroverlay(value) {
  //   this._draweroverlay = value
  // }

  @HostBinding('attr.draweroverlay')
  @Input()
  draweroverlay: string

  constructor() {}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log(changes)
  }

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
