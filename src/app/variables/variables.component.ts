import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-variables',
  templateUrl: './variables.component.html',
  styles: []
})
export class VariablesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  variables_1 = `
  ~~~css
  here are som vars
  ~~~
  `
  variables_code = `
  ~~~html
    <div style="background: var(--ea-base-color);"></div>
    <div style="background: var(--ea-base-color);"></div>
    <div style="background: var(--ea-base-color);"></div>
    <div style="background: var(--ea-base-color);"></div>
    <div style="background: var(--ea-base-color);"></div>
  ~~~
  `

  variables = `
  |  Title   |  Custom Property  | Description | rgba |
  |---|---|---|---|
  |  Base Color       | \` --ea-base-color \` | this would set the panel to its closed state | 1.2 14 |
  |  Alt Base Color   |  \` --ea-base-color-high \` |this would set the panel to its maximized, or open, state   |  --ea-base-color |
  |  Alt Base Color   |  \` --ea-alt-base-color \` |this would set the panel to its maximized, or open, state   |  --ea-base-color |
  |  Text Color Dark  |  \` --ea-text-color-dark \` |this would set the panel to its maximized, or open, state   |  --ea-base-color |
  |  Text Color Light |  \` --ea-text-color-light \` |this would set the panel to its maximized, or open, state   |  --ea-base-color |
  |  Background Hover |  \` --ea-background-color-hover \` |this would set the panel to its maximized, or open, state   |  --ea-base-color |
  |  Color Hover      |  \` --ea-background-color-active \` | maximized, or open, state   |  --ea-base-color |
  `
}
