import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-variables',
  templateUrl: './variables.component.html',
  styles: []
})
export class VariablesComponent implements OnInit {
  constructor() {}

  isActive = false
  textIsActive = false

  ngOnInit() {}

  variables = `
  |  Title   |  Custom Property  | Description | hsl( ) |
  |---|---|---|---|
  |  Base Color       | \` --ea-base-color \` | Main theme color for components | hsl(223, 40%,43%) |
  |  Base Color High   |  \` --ea-base-color-high \` | 10% increase from --ea-base-color in lightness for states|hsl(223, 40%, 53%)|
  |  Alt Base Color   |  \` --ea-alt-base-color \` | Secondary color for components |hsl(0, 0%, 20%)|
  |  Background Color Hover |  \` --ea-background-color-hover \` |Background color for all hover state components|\`var(--ea-base-color)\`|
|Background Color Active|\` --ea-background-color-active \`|Background color for all active state components|\`var(--ea-base-color-high)\`|
  `

  text_variables = `
  |  Title   |  Custom Property  | Description | rgba |
  |---|---|---|---|
  |  Text Color Dark |  \` --ea-text-color-light \` |Light color text for the theme|hsl(0, 0%, 96%)|
  |  Text Color Light |  \`--ea-text-color-dark \` |Dark color text for the theme|hsl(0, 0%, 20%)|
  |  Text Color Hover      |  \` --ea-text-color-hover \` |Text color for all hover state components|  \`var(--ea-text-color-light)\` |
  |  Text Color Active      |  \` --ea-text-color-active \` |Text color for all active state components| \` --ea-text-color-light\`|
  `
}
