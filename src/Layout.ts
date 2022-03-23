import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BehaviorSubject } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { ifDefined } from 'lit/directives/if-defined.js'
import { css_mode_ea_layout } from './CssMode.js'

interface LayoutConfig {
  theme: string
  colorScheme?: string
  drawerOverlayMediaQuery: string
  drawerOverlayMatches?: string
  drawerState: 'closed' | 'maximized'
  drawerOverlay: boolean
  drawerResizable: boolean
}

export class Layout {
  readonly config: LayoutConfig = {
    theme: 'mode',
    colorScheme: undefined,
    drawerOverlayMediaQuery: '(max-width: 600px)',
    drawerOverlayMatches: undefined,
    drawerState: 'maximized',
    drawerOverlay: false,
    drawerResizable: false,
  }

  readonly configSubject = new BehaviorSubject<LayoutConfig>(this.config)

  config$ = this.configSubject.pipe(shareReplay(1))

  drawerState$ = this.config$.pipe(map(x => x.drawerState))

  drawerOverlay$ = this.config$.pipe(map(x => x.drawerOverlay))

  constructor(config: Partial<LayoutConfig> = {}) {
    this.config = Object.assign(this.config, config)

    if (config.drawerOverlayMediaQuery) {
      const mql = window.matchMedia(config.drawerOverlayMediaQuery)
      this.onMediaChange(mql)
      if (typeof mql.addEventListener === 'function') {
        mql.addEventListener('change', x => this.onMediaChange(x))
      } else if (typeof mql.addListener === 'function') {
        mql.addListener(x => this.onMediaChange(x))
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMediaChange(x: any) {
    this.config.drawerOverlayMatches = x.matches
    if (this.config.drawerOverlayMatches) {
      if (this.config.drawerState !== 'closed') {
        this.config.drawerOverlay = false
        this.config.drawerState = 'closed'
      }
    } else {
      this.config.drawerOverlay = false
    }
    this.configSubject.next(this.config)
  }

  openDrawer() {
    if (this.config.drawerState !== 'maximized') {
      this.config.drawerState = 'maximized'
      if (this.config.drawerOverlayMatches) {
        this.config.drawerOverlay = true
      }
      this.configSubject.next(this.config)
    }
  }

  closeDrawer() {
    if (this.config.drawerState !== 'closed') {
      this.config.drawerState = 'closed'
      if (this.config.drawerOverlay) {
        this.config.drawerOverlay = false
      }
      this.configSubject.next(this.config)
    }
  }

  toggleDrawer() {
    if (this.config.drawerState === 'closed') {
      this.openDrawer()
      return false
    }
    this.closeDrawer()
    return true
  }

  changeColorScheme(scheme?: string) {
    const element = document.getElementsByClassName(this.config.theme)[0]
    if (scheme !== undefined) {
      if (this.config.colorScheme !== scheme) {
        if (this.config.colorScheme) {
          element.classList.remove(`ea-color-scheme-${this.config.colorScheme}`)
        }
        element.classList.add(`ea-color-scheme-${scheme}`)
        this.config.colorScheme = scheme
        this.configSubject.next(this.config)
      }
    } else if (this.config.colorScheme) {
      element.classList.remove(`ea-color-scheme-${this.config.colorScheme}`)
      this.config.colorScheme = scheme
      this.configSubject.next(this.config)
    }
  }
}

@customElement('ea-layout')
export class LayoutComponent extends LitElement {
  private _layout?: Layout

  @property({ attribute: false })
  get layout() {
    return this._layout
  }

  set layout(value) {
    this._layout = value
    if (this._layout) {
      this._layout.drawerState$.subscribe(x => {
        this.drawerState = x
      })
    }
  }

  @property({ type: String, reflect: true }) drawerState?: string

  static override styles = [css_mode_ea_layout]

  override render() {
    return html`
      <!-- <div
        overlay
        *ngIf="draweroverlay"
        (click)="close.emit(true)"
      ></div> -->
      <slot name="toolbar" border shadow class="ea-toolbar"></slot>
      <div class="ea-main">
        <slot name="body" class="ea-body"></slot>
      </div>
      ${this.drawerState !== 'closed'
        ? html`<slot
            name="drawer"
            state="${ifDefined(this.drawerState)}"
            ?resizable="${this._layout?.config.drawerResizable}"
            class="ea-drawer"
          ></slot>`
        : undefined}
    `
  }
}
