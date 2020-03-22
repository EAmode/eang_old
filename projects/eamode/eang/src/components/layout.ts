import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { map, share } from 'rxjs/operators'

export class Layout {
  private readonly configSubject = new BehaviorSubject<any>(this.config)
  config$ = this.configSubject.pipe(share())
  drawerState$ = this.config$.pipe(map(x => x.drawer.state))
  drawerOverlay$ = this.config$.pipe(map(x => x.drawer.overlay))

  constructor(
    public config = {
      theme: 'mode',
      colorScheme: 'default',
      drawerOverlayMediaQuery: '(max-width: 600px)',
      drawerOverlayMatches: undefined,
      drawer: { state: 'maximized', overlay: undefined }
    }
  ) {
    if (config.drawerOverlayMediaQuery) {
      const mql = window.matchMedia(config.drawerOverlayMediaQuery)
      this.onMediaChange(mql)
      mql.addEventListener('change', x => this.onMediaChange(x))
    }
  }

  onMediaChange(x) {
    this.config.drawerOverlayMatches = x.matches
    if (this.config.drawerOverlayMatches) {
      if (this.config.drawer.state !== 'closed') {
        this.config.drawer.overlay = true
      }
    } else {
      this.config.drawer.overlay = false
    }
    this.configSubject.next(this.config)
  }

  openDrawer() {
    if (this.config.drawer.state !== 'maximized') {
      this.config.drawer.state = 'maximized'
      if (this.config.drawerOverlayMatches) {
        this.config.drawer.overlay = true
      }
      this.configSubject.next(this.config)
    }
  }

  closeDrawer() {
    if (this.config.drawer.state !== 'closed') {
      this.config.drawer.state = 'closed'
      if (this.config.drawer.overlay) {
        this.config.drawer.overlay = false
      }
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
    <div overlay *ngIf="draweroverlay" (click)="close.emit(true)"></div>
    <ng-content select="ea-toolbar"></ng-content>
    <ng-content select="ea-body"></ng-content>
    <ng-content select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class LayoutComponent {
  @HostBinding('attr.draweroverlay')
  @Input()
  draweroverlay: boolean

  @Output() close = new EventEmitter<boolean>()
}
