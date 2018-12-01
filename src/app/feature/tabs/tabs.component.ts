import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-tabs',
  templateUrl: './tabs.component.html',
  styles: []
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  tabs_example = `
  ~~~html
  <ea-tabs>
    <ea-tab name="Paragraph">
      <p>Just paragraph</p>
    </ea-tab>
    <ea-tab name="List">
      <ul>
        <li>There is some list</li>
        <li>With few items</li>
        ...
      </ul>
    </ea-tab>
    <ea-tab name="Image">
      <img ...>
    </ea-tab>
  </ea-tabs>
  ~~~
  `

  tab_close = `
  ~~~html
  <ea-tabs>
    <ea-tab name="Paragraph" [closeable]="true">
      <p>Just paragraph</p>
    </ea-tab>
    <ea-tab name="List">
      <ul>
        <li>There is some list</li>
        <li>With few items</li>
      </ul>
    </ea-tab>
  </ea-tabs>
  ~~~
  `
}
