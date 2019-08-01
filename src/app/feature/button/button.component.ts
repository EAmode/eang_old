import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-button',
  templateUrl: './button.component.html',
  styles: [
    `
      div {
        --ea-grid-col-min-width: calc(var(--ea-sizer) * 8em);
      }
    `
  ]
})
export class ButtonComponent implements OnInit {
  button = `
  ~~~html
  <button class="ea-button">Button</button>
  <button class="ea-button" rounded>Rounded</button>
  <button class="ea-button" outline>Outline</button>
  <button class="ea-button" outline rounded>Outline Rounded</button>
  <button class="ea-button" flat>Flat</button>
  <button class="ea-button" flat rounded>Flat Rounded</button>
  ~~~
  `

  tags = `
  ~~~html
  <div class="ea-button" role="ea-button">Div</div>
  <span class="ea-button" role="ea-button" rounded>Rounded</span>
  <a class="ea-button" role="ea-button" outline>Outline</a>
  <label class="ea-button" role="ea-button" flat rounded>Flat Rounded</label>
  ~~~
  `

  button_sizing = `
  ~~~html
  <button class="ea-button" sm rounded><span icon filter></span>[sm]</button>
  <button class="ea-button" md outline rounded>[md]</button>
  <button class="ea-button" lg rounded>[lg]</button>
  <button class="ea-button" xl flat>[xl]</button>
  <button class="ea-button" xxl>[xxl]</button>
  ~~~
  `

  button_icon = `
  ~~~html
  <button class="ea-button"><span icon negative sign-in></span></button>
  <button class="ea-button" rounded><span icon negative filter></span></button>
  <button class="ea-button" rounded>Button <span icon negative filter></span></button>
  <button class="ea-button" icon outline><span icon trash-2></span></button>
  <button class="ea-button" icon outline rounded><span icon trash-2></span></button>
  <button class="ea-button" outline rounded><span icon trash-2></span> Delete</button>
  <button class="ea-button" icon flat><span icon filter></span></button>
  <button class="ea-button" flat rounded><span icon filter></span></button>
  <button class="ea-button" flat rounded>Filter <span icon filter></span></button>
  ~~~
  `

  props = `
  |  Attribute  | Description |
  |---|---|
  | outline  | Removes the background and has only an outline around the button |
  | rounded  |  Sets the border radius to 8rem to allow the highest possible curve |
  | flat | Removes all background and border for only :hover and :active effects |
  | icon | Removes majority of the padding to handle icon buttons that are meant to have smaller sizes |
  `

  button_variables = `
  |  Name  | Description |
  |---|---|
  | --ea-button-background  | Change button background |
  `

  override_button_example = `
  ~~~css
  :root {
    --ea-button-background: #884e88;
  }

  button {
    --ea-button-background: #884e88;
  }

  .ea-button {
    --ea-button-background: #884e88;
  }

  button[flat][rounded] {
    --ea-button-background: #884e88;
  }

  .ea-button {
    --ea-button-background: #884e88;
  }

  button[outline][icon] {
    --ea-button-background: #884e88;
  }
  ~~~
  `

  icons = `
  *app-component.html*
  ~~~html
  <button class="ea-button" style="--ea-button-margin: 1em; --ea-button-padding: 1em 1em;" large>
    <span role="icon" style="--ea-button-icon: var(--ea-icon-sign-in); --ea-icon-margin: 0 0.5em 0 0;" icon></span>
    {{Button}}
  </button>
  ~~~

  `
  constructor() {}

  ngOnInit() {}
}
