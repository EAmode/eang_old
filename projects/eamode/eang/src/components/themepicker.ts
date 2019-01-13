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
  // tslint:disable-next-line:max-line-length
  template: `<button class="icon-button" style="--ea-button-padding: 0;" (click)="toggleThemes()" (focus)="focus.emit($event)" (keydown)="keyDown($event)">
  </button>
  <div *ngIf="showThemes" class="ea-themepicker-dropdown">
    <ul  class="ea-themepicker-dropdown-list" >
      <li *ngFor="let theme of themes; let i = index"
      (click)="selectThemeClick(theme)"
      class="ea-themepicker-list-item"
      [attr.selected]="theme === selectedTheme ? '' : null">{{theme}}</li>
    </ul>
  </div>`
})
export class ThemePickerComponent implements OnInit {
  @Input()
  themes
  @Input()
  select

  @Output()
  selectedTheme
  @Output()
  readonly click = new EventEmitter<MouseEvent>()

  themeMatch = []
  showThemes = false
  listIndex = 0

  ngOnInit() {
    this.themes.forEach(element => {
      this.themeMatch.push(element)
    })
    this.selectedTheme = this.themes[this.listIndex]
  }

  selectThemeClick(theme) {
    this.selectTheme(theme)
    this.selectedTheme = theme
    this.listIndex = this.themes.indexOf(theme)
    this.toggleThemes()
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
  }

  toggleThemes() {
    this.showThemes = !this.showThemes
  }

  keyDown(event: KeyboardEvent) {
    if (
      event.key === 'ArrowDown' &&
      this.listIndex < this.themes.length - 1 &&
      this.showThemes
    ) {
      this.listIndex++
    } else if (
      event.key === 'ArrowUp' &&
      this.listIndex > 0 &&
      this.showThemes
    ) {
      this.listIndex--
    }
    this.selectedTheme = this.themes[this.listIndex]
    this.selectTheme(this.themes[this.listIndex])
  }
}
