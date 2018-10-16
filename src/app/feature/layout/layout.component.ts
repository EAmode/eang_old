import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  ea_layout_attrs = `
  *layout.component.html*
  ~~~html
    <ea-layout>
      <ea-toolbar> <!-- Toolbar Content here --> </ea-toolbar>

      <ea-drawer> <!-- Drawer Content here --> </ea-drawer>

      <ea-main>
        <ea-body>
          <!-- Body content here -->
        </ea-body>
      </ea-main>
    </ea-layout>
  ~~~
  `
  ea_layout_grid = `
  *layout.css*
  ~~~css
  .mode{
    ea-layout {
      display: grid;
      height: 100vh;
      overflow: hidden;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        'toolbar toolbar'
        'drawer main';
    }
  }
  ~~~
  `
  ea_layout_toolbar_drawer = `
  ~~~html
  <button custom *ngIf="drawerState === 'maximized'" (click)="layout.drawerState$.next('closed')">
    <span role="icon" style="--ea-button-icon: var(--ea-icon-chevrons-left); --ea-icon-margin: 0; height: 2em;" icon></span>
  </button>
  <button custom *ngIf="drawerState === 'closed'" (click)="layout.drawerState$.next('maximized')">
    <span role="icon" style="--ea-button-icon: var(--ea-icon-hamburger-menu); --ea-icon-margin: 0;" icon></span>
  </button>
  ~~~
  `

  ea_drawer_attrs = `
  |  maximized   | this would set the drawer to width value that shows the drawer open  |
  |---|---|
  |  closed   |  this would set the panel to its closed state   |
  `
  constructor() {}

  ngOnInit() {}
}
