import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-inputs',
  templateUrl: './inputs.component.html',
  styles: [
    `
      h2 {
        margin: 0.5em 0;
      }

      .dis-flx {
        display: flex;
      }
    `
  ]
})
export class InputsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  inputs = `
  ~~~html
  <div class="ea-form-field">
    <input type="..." placeholder="..." value="..." name="..." disabled>
  </div>
  ~~~
  `

  switchCheckbox = `
  ~~~html
  <div class="checkbox-switch">
    <input type="checkbox" value="Light">
  </div>
  ~~~
  `
}
