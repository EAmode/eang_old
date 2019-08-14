import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  role_list = `
~~~html
  <div class="ea-list">
    <div listitem>...</div>
    ...
  </div>
~~~
  `
  role_list_css = `
~~~html
  <!-- // CSS
    --ea-list-max-height: 15em;
    // if not defined  --ea-color-3 will be used
    --ea-list-background-color: #d4d6c8;
    & [listitem] {
    &:active {
      // if not defined --ea-background-color-active will be used
      background-color: #52524e;
    }
    &:hover:not(:active) {
      // if not defined --ea-background-color-hover will be used
      background-color: #9a9b94
    }
  }
  -->

  <div  class="ea-list" id="customized">
    <div listitem>Angular</div>
    <div listitem>Express</div>
    <div listitem>Polymer</div>
    <div listitem>Aurelia</div>
    <div listitem>Vue.js</div>
    <div listitem>React</div>
    <div listitem>Meteor</div>
    <div listitem>Ember.js</div>
    <div listitem>Riot.js</div>
  </div>
~~~
  `

  role_banner_listitem = `
  |  CSS Variables   | Description  | Default |
  |---|---|----|
  |  \`--ea-list-max-height\`  |  Sets the max height for the list before it overflows | 8em |
  |  \`--ea-listitem-background-hover\`  |  Sets the background for a  \`:hover\` event | rgba(0,0,0,0.05) |
  |  \`--ea-listitem-background-active\`   |  Sets the background for an \`:active\` event   | rgba(0,0,0,0.1) |
  | \`--ea-listitem-color-hover \`| Sets the color of the font for a \`:hover\` event | \`--ea-text-color\` |
  | \`--ea-listitem-color-active\` | Sets the color of the font for an \`:active\` event | \`--ea-text-color\` |
  | \`--ea-listitem-height\` | Sets the height of an individual list-item | 2.5em |
  `

  constructor() {}

  ngOnInit() {}
}
