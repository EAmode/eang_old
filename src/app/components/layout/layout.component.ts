import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { EangElement, Layout } from '@eamode/eang'

@Component({
  selector: 'eangio-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  activate = new Subject<EangElement>()

  layoutExample1 = new Layout()

  ea_layout_attrs = `
  *layout.component.html*
  ~~~html
    <ea-layout>
      <ea-toolbar>
        <header>
          <!-- Header Content here -->
        </header>
        <aside>
          <!-- Aside Content here -->
        </aside>
      </ea-toolbar>

      <ea-drawer>
        <header>
          <!-- Header Content here -->
        </header>
        <section>
          <!-- Section Content here -->
        </section>
        <footer>
          <!-- Footer Content here -->
        <footer>
      </ea-drawer>

      <ea-body>
        <ea-main>
          <!-- Body content here -->
        </ea-main>
        <ea-footer>
          <!-- Footer content here -->
        </ea-footer>
      </ea-body>
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

  ea_layout_import = `
  *module.ts*
  ~~~ts
  import { LayoutModule } from '@eamode/eang';
  ...
  @NgModule({
    imports: [ LayoutModule ]
  })
  ~~~
  `
  ea_layout_drawer = `
  *layout.component.html*
  ~~~html
    <ea-drawer [drawerState$]="layout.drawerState$">
      <header>
      <!-- Drawer <header> content-->
      </header>
      <section>
        <a href="/your-link-here"></a>
      </section>
      <footer>
        <!-- Drawer <footer> content-->
      </footer>
    </ea-drawer>
  ~~~
  `

  ea_drawer_attrs = `
  |  Attributes   | Description  |
  |---|---|
  |  Closed   |  this would set the panel to its closed state   |
  |  Maximized   |  this would set the panel to its maximized, or open, state   |
  `

  ea_toolbar_attrs = `
  |  Attributes   | Description  |
  |---|---|
  |  Shadow   |  Sets a drop shadow on the ea-toolbar   |
  |  Flex   |  Sets the properties of the toolbar to be flex with space-between a two child element layout  |
  `

  constructor() {}

  ngOnInit() {}
}
