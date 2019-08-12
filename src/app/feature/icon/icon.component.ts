import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Subject, BehaviorSubject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

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
