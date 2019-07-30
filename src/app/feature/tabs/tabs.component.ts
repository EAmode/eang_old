import { Component, OnInit } from '@angular/core'
import { Subject, timer } from 'rxjs'
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
  public doesFirstTabActive = true
  constructor() {}

  ngOnInit() {
    this.activate.subscribe((el: EangElement) => {
      if (el.name === 'Paragraph#1' && el.isActive) {
        this.doesFirstTabActive = true
      } else {
        this.doesFirstTabActive = false
      }
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
  *tabs.html*
  ~~~html
  <ea-tablist [tabpanelGroup]="exampleTabs" [activateSubject]="activate"></ea-tablist>
  <ea-tabpanel-group #exampleTabs>
    <ea-tabpanel id="tab-1" name="Paragraph#1">
      <p>Just paragraph #1</p>
    </ea-tabpanel>
    <ea-tabpanel *ngIf="editing" name="Toggle Tab">
      <p>Toggle on/off</p>
    </ea-tabpanel>
    <ea-tabpanel name="List">
      <ul>
        <li>There is some list</li>
        <li>With few items</li>
      </ul>
    </ea-tabpanel>
    <ea-tabpanel *ngFor="let t of addedTabs" [name]="t.name">
      <p>This is an added Tab!</p>
    </ea-tabpanel>
  </ea-tabpanel-group>
  ~~~
  `

  tabs_simple_example = `
  *tabs.html*
  ~~~html
  <ea-tabs>
  <ea-tab [tabTitle]="'Tab 1'" active>
    Tab 1 content
  </ea-tab>
  <ea-tab tabTitle="Tab 2">
    Tab 2 content
  </ea-tab>
  <ea-tab tabTitle="Tab 3">
    Tab 3 content
  </ea-tab>
  <ea-tab tabTitle="Tab 4">
    Tab 4 content
  </ea-tab>
  <ea-tab tabTitle="Tab 5">
    Tab 5 content
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
