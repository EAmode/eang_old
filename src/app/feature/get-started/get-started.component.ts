import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-get-started',
  templateUrl: './get-started.component.html',
  styles: []
})
export class GetStartedComponent implements OnInit {
  ngOnInit() {}
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
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Project Name</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
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
}
