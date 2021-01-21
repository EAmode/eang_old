import { Component } from '@angular/core'

@Component({
  selector: 'eangio-get-started',
  templateUrl: './get-started.component.html',
  styles: [
    `
      h5 {
        font-weight: 500;
        display: -ms-inline-flexbox;
      }
    `
  ]
})
export class GetStartedComponent {
  ngnew = `
  ~~~ ts
  ng new [project name]
  ~~~
  `

  npminstall = `
  ~~~ ts
  npm install -S @eamode/eang
  ~~~
    `

  import = `
  *app.module.ts*
  ~~~ts
  import { PanelModule, AutoCompleteModule, LayoutModule, ... } from '@eamode/eang';
  ~~~
      `
  ngmodel = `
  *app.module.ts*
  ~~~ts
  @NgModule({
    ...
    imports: [..., PanelModule, AutoCompleteModule, LayoutModule, ...],
    ...
  })
  ~~~
    `
  style = `
  *style.scss*
  ~~~css
  @import '~@eamode/eang/css/all.css';
  ~~~
    `
  body = `
  *index.html*
  ~~~html
  <!doctype html>
  <html>
    <head>
      ...
    </head>
    <body class="mode">
      <app-root></app-root>
    </body>
  </html>
  ~~~
    `
  mode = `
  ~~~ css
  .mode {
    background: navy;
  }
  ~~~
    `
  eadrawertag = `
   ~~~ css
   ea-drawer {
    --ea-drawer-width: 12em;
  }
  ~~~
    `

  layout = `
  *component.html*
  ~~~html
  <ea-layout>
  <ea-toolbar>
    <h1>Logo here</h1>
  </ea-toolbar>
   <ea-drawer>
    <a href="">Link in Drawer</a>
  </ea-drawer>
   <ea-main>
    <ea-body>
      <p lg>Body</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget mollis nisi. Vivamus vel enim turpis.</p>
    </ea-body>
    <ea-footer>
      <p sm>your company here TM</p>
    </ea-footer>
  </ea-main>
  </ea-layout>
  ~~~
   `
  ea_layout_attrs = `
   *layout.component.html*
   ~~~html
     <ea-layout>
       <ea-toolbar>
         <!-- Toolbar Content here -->
       </ea-toolbar>

       <ea-drawer>
         <!-- Drawer Content here -->
       </ea-drawer>

       <ea-main>
         <ea-body>
           <!-- Body content here -->
         </ea-body>
       </ea-main>
     </ea-layout>
   ~~~
   `
}
