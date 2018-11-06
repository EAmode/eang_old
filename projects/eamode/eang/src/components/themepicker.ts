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
  template: `<button icon class="icon-button" style="--ea-button-padding: 0;" (click)="toggleThemes()" (focus)="focus.emit($event)">
  </button>
  <div *ngIf="showThemes" class="ea-themepicker-dropdown">
    <ul class="ea-themepicker-dropdown-list">
      <li *ngFor="let theme of themes" (click)="selectTheme(theme)" class="ea-themepicker-list-item">{{theme}}</li>
    </ul>
  </div>
  `
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
