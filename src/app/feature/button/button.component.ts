import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {
  button = `
  ~~~html
  <button>Button</button>
  <button rounded>Rounded</button>
  <button outline>Outline</button>
  <button outline rounded>Outline Rounded</button>
  <button flat>Flat</button>
  <button flat rounded>Flat Rounded</button>
  ~~~
  `

  button_sizing = `
  ~~~html
  <button sm rounded><span icon filter></span>[sm]</button>
  <button md outline rounded>[md]</button>
  <button lg rounded>[lg]</button>
  <button xl flat>[xl]</button>
  <button xxl>[xxl]</button>
  ~~~
  `

  button_icon = `
  ~~~html
  <button icon><span icon sign-in></span></button>
  <button rounded><span icon sign-in></span></button>
  <button icon outline><span icon trash></span></button>
  <button  outline rounded>Button<span icon filter></span></button>
  <button icon outline rounded><span icon filter></span></button>
  <button outline rounded>Delete<span icon filter></span></button>
  <button icon flat><span icon trash></span></button>
  <button icon flat rounded><span icon filter></span></button>
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

  icons = `
  *app-component.html*
  ~~~html
  <button style="--ea-button-margin: 1em; --ea-button-padding: 1em 1em;" large>
    <span role="icon" style="--ea-button-icon: var(--ea-icon-sign-in); --ea-icon-margin: 0 0.5em 0 0;" icon></span>
    {{Button}}
  </button>
  ~~~

  `
  constructor() {}

  ngOnInit() {}
}
