import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {
  props = `
*Custom Properties*
  |  Custom Property  | Description |
  |---|---|
  |  \`--ea-button-font-size\`  | This property sets the font-size for the button and is the basis for all proportional scaling |
  |  \`--ea-button-background-color\`  |  This sets the background color of the button
  | \`--ea-button-border\` | Sets the color of the button border
  | \`--ea-button-border-outline\` | Sets the size, type, and color of the border
  | \`--ea-button-padding\` | The padding of the button set to be proportional to the font-size
  | \`--ea-button-border-radius\` | Sets the border-radius proprty in em to allow it to scale

  *button.css*
  ~~~css
  .mode {
    & button {
      --ea-button-color: var(--ea-button-color, var(--ea-color-2)); /* Sets the button font-color */
      --ea-button-background-color: var(--ea-button-background-color, var(--ea-color-background-2)); /* Sets the button background color */
      --ea-button-border: var(--ea-button-border, var(--ea-color-background-4));
      --ea-button-border-outline: 0.09em; /*Sets the initial em for the border outline*/
      --ea-button-font-size: 20px; /*Sets the scale factor for the button*/
      --ea-button-border-radius: 0.25em; /*Sets the border radius for the button*/
      --ea-button-padding: 1em;
  ~~~



  |  Size Attribute  | Description |
  |---|---|
  |  [small]   | Scales the button down proportionally to 80% of regular button based off the font-size set for the button   |
  |  [medium]   |  Scales the button to 125% of the size when using the base font-size
  | [large] | Scales the button to 150% of the size when using the base font-size

  *button.css*
  ~~~css
  & [small] {
    font-size: calc(var(--ea-button-font-size) * 0.8);
  }
  & [medium] {
    font-size: calc(var(--ea-button-font-size) * 1.25);
  }
  & [large] {
    font-size: calc(var(--ea-button-font-size) * 1.5);
  }
  ~~~
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
