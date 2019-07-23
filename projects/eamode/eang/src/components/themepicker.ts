import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core'

@Component({
  selector: 'ea-themepicker',
  template: `
    <button
      class="ea-button"
      icon
      flat
      (click)="toggleThemes()"
      (focus)="focus.emit($event)"
    >
      <span icon pallete style="height:1.5rem; width: 1.5rem;"></span>
    </button>
    <div *ngIf="showThemes" class="ea-themepicker-dropdown">
      <ul class="ea-themepicker-dropdown-list">
        <li
          *ngFor="let theme of themes"
          (click)="selectTheme(theme)"
          class="ea-themepicker-list-item"
        >
          {{ theme }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      li:first-child {
        border-top-left-radius: calc(var(--ea-sizer) * 0.15em);
        border-top-right-radius: calc(var(--ea-sizer) * 0.15em);
      }

      li:last-child {
        border-bottom-left-radius: calc(var(--ea-sizer) * 0.15em);
        border-bottom-right-radius: calc(var(--ea-sizer) * 0.15em);
      }
    `
  ]
})
export class ThemePickerComponent implements OnInit {
  @Input() themes
  @Input() select

  @Output() readonly focus = new EventEmitter<FocusEvent>()
  @Output() readonly blur = new EventEmitter<FocusEvent>()

  themeMatch = []
  showThemes = false

  ngOnInit() {
    this.themes.forEach(element => {
      this.themeMatch.push(element)
    })
  }

  selectTheme(theme) {
    const themedElements = document.querySelectorAll(this.select)
    Array.from(themedElements).forEach((element: HTMLElement) => {
      this.themeMatch.forEach(match => {
        if (element.classList.contains(match)) {
          element.classList.remove(match)
        }
      })
      element.classList.add(theme)
    })
    this.showThemes = false
  }

  toggleThemes() {
    this.showThemes = !this.showThemes
  }
}
