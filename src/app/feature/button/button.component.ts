import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {
  intro = `
  ## Proportional sizing buttons

  Eang uses a combination of em, custom properties, and the calc()
  function to make implementing proportional sized buttons more simple.
  It capitalizes on the inherit features of em that allow elements of the
  button to scale relative to a set font-size defined within the component.
  `

  props = `
*Custom Properties*
  |  \`--ea-button-font-size\`  | This property sets the font-size for the button and is the basis for all proportional scaling |
  |---|---|
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

  These variables can all be adjusted to customize aspects of your button that you
  want to scale with. We've added a few attributes to allow you to easily scale up and
  down to preset measurements.

  |  [small]   | Scales the button down proportionally to 80% of regular button based off the font-size set for the button   |
  |---|---|
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
  *button.css*
  ~~~css
  & [icon] {
    & section {
      display: flex;
      align-items:center;
    }
    & aside {
      --ea-button-icon: var(--ea-button-icon, inherit);
      background: var(--ea-button-icon);
      background-repeat: no-repeat;
      background-position:center;
      height: 1em;
      width: 1em;
      margin-right: 1em;
    }
  }
  ~~~
  *app-component.html*
  ~~~html
  <button style="--ea-button-icon: var(--ea-icon-sign-in);" icon small>
    <section>
      <aside></aside>
      Button
    </section>
  </button>
  ~~~

  Setting the icon in the source code of our application is very simple.
  Using one of the pre-defined custom properties that represent an icon from \`/icons.css\` you
  can quickly set the button to have an icon.
  `
  constructor() {}

  ngOnInit() {}
}
