import { Component } from '@angular/core'

@Component({
  selector: 'eangio-icon',
  templateUrl: './icon.component.html',
  styles: []
})
export class IconComponent {
  constructor() {}

  icon = `
  ~~~html
  <span icon x></span>
  <span icon x negative></span>
  ~~~
  `

  iconset = [
    {
      name: 'x',
      title: 'close',
      className: 'ea-'
    },
    ,
    {
      name: 'chevron',
      title: 'close',
      className: 'ea-'
    },
    ,
    {
      name: 'x',
      title: 'close',
      className: 'ea-'
    },
    ,
    {
      name: 'x',
      title: 'close',
      className: 'ea-'
    },
    ,
    {
      name: 'x',
      title: 'close'
    }
  ]
}
