import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-icon',
  templateUrl: './icon.component.html',
  styles: []
})
export class IconComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  icon = `
  ~~~html
  <span icon x></span>
  <span icon x negative></span>
  <span icon x aqua></span>
  ~~~
  `

  iconset = [{ name: 'x' }, { name: 'chevron' }]

  colors = `
  |  Attributes   | HEX Code  |
  |---|---|
  |  Closed   |  this would set the panel to its closed state   |
  |  Maximized   |  this would set the panel to its maximized, or open, state   |
  `
}
