import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'

@Component({
  selector: 'eangio-markdown',
  templateUrl: 'markdown.component.html',
  styles: []
})
export class MarkdownComponent implements OnInit {
  observableAndContext$ = interval(1000)

  constructor() {}

  ngOnInit() {}

  closeNode() {}

  ea_menu = `
  ~~~html
  <ea-markdown
    [doc]="# This is a heading">
  </ea-menu>
  ~~~
  `

  observableAndContext = `
  ~~~ts
  doc$ =
  ~~~
  `
}
