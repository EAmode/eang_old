import { Component, OnInit, Input, AfterViewInit } from '@angular/core'

@Component({
    selector: 'ea-themepicker',
    template: `<button class="icon-button" [ngStyle]="{'background-image': 'url(assets/images/palette.svg)'}" (click)="toggleThemes()">
  </button>
  <div *ngIf="showThemes">
    <ul class="eang-theme-dropdown-list">
      <li *ngFor="let theme of themes" (click)="selectTheme(theme)" class="eang-theme-dropdown-element">{{theme}}</li>
    </ul>
  </div>
  `
})
export class ThemePickerComponent implements OnInit {
    @Input() themes
    @Input() select
    themeMatch = []
    showThemes

    constructor() {
        this.showThemes = false
    }

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
    }

    toggleThemes() {
        if (this.showThemes) {
            this.showThemes = false
        } else {
            this.showThemes = true
        }
    }
}
