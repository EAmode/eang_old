import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'
import { Content } from '@angular/compiler/src/render3/r3_ast'

@Component({
  selector: 'eangio-markdown',
  templateUrl: 'markdown.component.html',
  styles: []
})
export class MarkdownComponent implements OnInit {
  observableAndContext$ = interval(1000)
  menu: any
  editing: false
  test: any
  changesTab = { visible: false }

  constructor() {}

  ngOnInit() {
    this.test = this.content[0].body
  }

  closeNode() {}

  content: any = [
    {
      name: 'Current',
      body: `# This is a title
## This is an h2
      `,
      showEditor: false
    }
  ]

  otherTabs = [
    { name: 'other Tab 1', content: 'Content of Other tab 1', visible: true },
    { name: 'other Tab 2', content: 'Content of Other tab 2', visible: true },
    { name: 'other Tab 3', content: 'Content of Other tab 3', visible: true },
    { name: 'other Tab 4', content: 'Content of Other tab 4', visible: true }
  ]
  toggleTab() {
    this.changesTab.visible = !this.changesTab.visible
  }

  addTab() {
    const newTab = {
      name: 'other New Tab',
      content: 'new content other',
      visible: true
    }
    this.otherTabs.push(newTab)
    console.log(this.otherTabs)
  }

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
