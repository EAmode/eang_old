import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Subject, BehaviorSubject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'eangio-icon',
  templateUrl: './icon.component.html',
  styles: [
    `
      #searchIcon {
        margin: 1em 0;
        font-size: larger;
        height: 2.4em;
        width: 100%;
        font-family: monospace;
      }

      div[hidesearchresult] {
        display: none;
      }

      .hidesearchresult {
        display: none;
      }
    `
  ]
})
export class IconComponent implements OnInit, AfterViewInit {
  inputValue = ''
  searchDecouncer$: Subject<string> = new Subject()
  successfullyMatch = new BehaviorSubject<number>(0)
  match = 0

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.searchDecouncer$
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((term: string) => {
        this.search(term)
      })
  }

  public onSearchInputChange(term: string): void {
    this.searchDecouncer$.next(term)
  }

  private search(term: string): void {
    Array.from(document.getElementsByClassName('searchable')).forEach(
      (eachEl: Element) => {
        eachEl.removeAttribute('hidesearchresult')
        if (!eachEl.textContent.includes(term)) {
          eachEl.setAttribute('hidesearchresult', 'true')
        }
      }
    )
  }

  icon = `
  ~~~html
  <span icon x></span>
  <span icon x negative></span>
  ~~~
  `

  iconset = [
    {
      name: 'x',
      title: 'close'
    },
    {
      name: 'chevron',
      title: 'close'
    },
    {
      name: 'x',
      title: 'close'
    },
    {
      name: 'x',
      title: 'close'
    },
    {
      name: 'x',
      title: 'close'
    }
  ]

  cardWithIcons = [
    { iconName: 'alert-circle', className: 'ea-alert-circle' },
    { iconName: 'align-justify', className: 'ea-align-justify' },
    { iconName: 'alert-triangle', className: 'ea-alert-triangle' },
    { iconName: 'align-center', className: 'ea-align-center' },
    { iconName: 'align-left', className: 'ea-align-left' },
    { iconName: 'align-right', className: 'ea-align-right' },
    { iconName: 'archive', className: 'ea-archive' },
    { iconName: 'arrow-down-circle', className: 'ea-arrow-down-circle' },
    { iconName: 'arrow-down-left', className: 'ea-arrow-down-left' },
    { iconName: 'arrow-down-right', className: 'ea-arrow-down-right' },
    { iconName: 'arrow-down', className: 'ea-arrow-down' },
    { iconName: 'arrow-left-circle', className: 'ea-arrow-left-circle' },
    { iconName: 'arrow-left', className: 'ea-arrow-left' },
    { iconName: 'bar-chart', className: 'ea-bar-chart' },
    { iconName: 'bell-off', className: 'ea-bell-off' },
    { iconName: 'bell', className: 'ea-bell' },
    { iconName: 'bluetooth', className: 'ea-bluetooth' },
    { iconName: 'bookmark', className: 'ea-bookmark' },
    { iconName: 'calendar', className: 'ea-calendar' },
    { iconName: 'check-circle', className: 'ea-check-circle' },
    { iconName: 'check-square', className: 'ea-check-square' },
    { iconName: 'code', className: 'ea-code' },
    { iconName: 'crosshair', className: 'ea-crosshair' },
    { iconName: 'database', className: 'ea-database' },
    { iconName: 'download', className: 'ea-download' },
    { iconName: 'external-link', className: 'ea-external-link' },
    { iconName: 'filter', className: 'ea-filter' },
    { iconName: 'folder-plus', className: 'ea-folder-plus' },
    { iconName: 'help-circle', className: 'ea-help-circle' },
    { iconName: 'hamburger-menu', className: 'ea-hamburger-menu' },
    { iconName: 'inbox', className: 'ea-inbox' },
    { iconName: 'link', className: 'ea-link' },
    { iconName: 'link-2', className: 'ea-link-2' },
    { iconName: 'x', className: 'ea-x' },
    { iconName: 'minimized', className: 'ea-minimized' },
    { iconName: 'close', className: 'ea-close' },
    { iconName: 'sign-in', className: 'ea-sign-in' },
    { iconName: 'chevron-right', className: 'ea-chevron-right' },
    { iconName: 'menu-close', className: 'ea-menu-close' },
    { iconName: 'chevron-down', className: 'ea-chevron-down' },
    { iconName: 'vertical-menu', className: 'ea-vertical-menu' },
    { iconName: 'chevrons-left', className: 'ea-chevrons-left' },
    { iconName: 'chevrons-right', className: 'ea-chevrons-right' },
    { iconName: 'save', className: 'ea-save' },
    { iconName: 'edit', className: 'ea-edit' },
    { iconName: 'paperclip', className: 'ea-paperclip' },
    { iconName: 'plus-circle', className: 'ea-plus-circle' },
    { iconName: 'printer', className: 'ea-printer' },
    { iconName: 'refresh-cw', className: 'ea-refresh-cw' },
    { iconName: 'share', className: 'ea-share' },
    { iconName: 'toggle-left', className: 'ea-toggle-left' },
    { iconName: 'toggle-right', className: 'ea-toggle-right' },
    { iconName: 'trash-2', className: 'ea-trash-2' },
    { iconName: 'upload', className: 'ea-upload' },
    { iconName: 'volume-1', className: 'ea-volume-1' },
    { iconName: 'volume-2', className: 'ea-volume-2' },
    { iconName: 'volume-x', className: 'ea-volume-x' },
    { iconName: 'wifi-off', className: 'ea-wifi-off' },
    { iconName: 'wifi', className: 'ea-wifi' },
    { iconName: 'zoom-in', className: 'ea-zoom-in' },
    { iconName: 'zoom-out', className: 'ea-zoom-out' },
    { iconName: 'add-file', className: 'undefinedadd-file' }
  ]

  colors = `
  |  Attributes   | HEX Code  |
  |---|---|
  |  Closed   |  this would set the panel to its closed state   |
  |  Maximized   |  this would set the panel to its maximized, or open, state   |
  `
}
