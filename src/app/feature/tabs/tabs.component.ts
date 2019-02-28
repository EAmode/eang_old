import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { EangElement } from '@eamode/eang'

@Component({
  selector: 'eangio-tabs',
  templateUrl: './tabs.component.html',
  styles: []
})
export class TabsComponent implements OnInit {
  addedTabs = []
  editing = true
  activate = new Subject<EangElement>()
  constructor() {}

  ngOnInit() {
    this.activate.subscribe(x => {
      console.log(x)
    })
  }

  toggleTab() {
    this.editing = !this.editing
  }

  addTab() {
    this.addedTabs.push({
      id: `newTab ${this.addedTabs.length}`,
      name: `Added Tab # ${this.addedTabs.length + 1}`
    })
  }

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
    <ng-template #headerTemplate>
      <input type="checkbox">
      <p>Check it!</p>
    </ng-template>
    <ea-tab name="Info 1">
      <p>Information #1</p>
    </ea-tab>
    <ea-tab name="Info 2">
        <p>Information #2</p>
    </ea-tab>
  </ea-tabs>
  ~~~
  `

  tab_custom = `
  *component.html*
  ~~~html
  <ea-tabs>
    <ng-template #headerTemplate>
        <input type="checkbox">
    </ng-template>
    <ea-tab name="Information 1">
      <p>Information #1</p>
    </ea-tab>
    <ea-tab name="Information 2">
      <p>Information #2</p>
    </ea-tab>
  </ea-tabs>
  ~~~
  `
}
