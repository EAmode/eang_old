import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {
  button = `
  ~~~html
  <button>Click me!</button>
  <button outline>Click me!</button>
  ~~~
  `
  props = `

  ### Attributes
  |  Custom Property  | Description |
  |---|---|
  | outline  | This property sets the font-size for the button and is the basis for all proportional scaling |
  | link-button  |  This sets the background color of the button
  | icon-button | Sets the color of the button border
  | small | Sets the size, type, and color of the border
  | medium | The padding of the button set to be proportional to the font-size
  | large | Sets the border-radius proprty in em to allow it to scale

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
