import { Component } from '@angular/core'

@Component({
  selector: 'eangio-utilities',
  templateUrl: './utilities.component.html',
  styles: []
})
export class UtilitiesComponent {
  center = `
  ~~~html
  <div center>
  </div>
  ~~~
  `

  multi_col = `
  ~~~html
  <div multi-col style="--ea-grid-col-min-width: 18em;">
    <div center>testing</div>
    <div center>testing</div>
  </div>
  ~~~
  `
  constructor() {}
}
