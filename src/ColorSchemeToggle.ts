import { html, LitElement, property, customElement } from 'lit-element'
import { css_mode_ea_button } from './CssMode.js'

@customElement('ea-color-scheme-toggle')
export class ColorSchemeToggle extends LitElement {
  @property({ type: String, reflect: true }) selector = '.mode'

  @property({ type: String, reflect: true }) preferedColorScheme?: string

  @property({ type: String, reflect: true }) selectedColorScheme?: string

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  private onChange = (e: MediaQueryListEvent | MediaQueryList) => {
    const colorSchemeOverride = localStorage.getItem('ea-color-scheme-override')
    if (colorSchemeOverride) {
      this.changeColorScheme(colorSchemeOverride)
    }
    if (e.matches) {
      this.preferedColorScheme = 'dark'
      if (!colorSchemeOverride) {
        this.changeColorScheme('dark')
      }
    } else {
      this.preferedColorScheme = 'light'
      if (!colorSchemeOverride) {
        this.changeColorScheme('light')
      }
    }

    if (this.selectedColorScheme === this.preferedColorScheme) {
      localStorage.removeItem('ea-color-scheme-override')
    }
  }

  static styles = [css_mode_ea_button]

  connectedCallback() {
    super.connectedCallback()
    this.mediaQuery.addListener(this.onChange)
    this.onChange(this.mediaQuery)
  }

  disconnectedCallback() {
    this.mediaQuery.removeListener(this.onChange)
  }

  render() {
    if (this.selectedColorScheme === 'dark') {
      return html`
        <button
          class="ea-button-icon"
          title="Enable Light Mode"
          @click="${() => this.changeColorScheme('light')}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden="true"
            data-icon="sun"
            height="100%"
          >
            <path
              fill="currentColor"
              d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
            />
          </svg>
        </button>
      `
    }
    return html`
      <button
        class="ea-button-icon"
        title="Enable Dark Mode"
        @click="${() => this.changeColorScheme('dark')}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          aria-hidden="true"
          data-icon="moon"
          height="100%"
        >
          <path
            fill="currentColor"
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
          />
        </svg>
      </button>
    `
  }

  changeColorScheme(scheme: string) {
    if (scheme === this.preferedColorScheme) {
      localStorage.removeItem('ea-color-scheme-override')
    } else {
      localStorage.setItem('ea-color-scheme-override', scheme)
    }
    const elements = document.querySelectorAll(this.selector)
    this.selectedColorScheme = scheme
    elements.forEach(element => {
      if (scheme === 'light') {
        element.removeAttribute('data-color-scheme')
      } else {
        element.setAttribute('data-color-scheme', scheme)
      }
    })
  }
}
