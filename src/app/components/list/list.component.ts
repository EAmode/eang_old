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
  <ul>
    <li>...</li>
  </ul>

  <ol>
    <li>...</li>
  </ol>
</div>
~~~
  `
  list_html = `
~~~html
<ul class="ea-list" id="customized">
  <li>Angular</li>
  <li>Express</li>
  <li>Polymer</li>
  <li>Aurelia</li>
  <li>Vue.js</li>
  <li>React</li>
  <li>Meteor</li>
  <li>Ember.js</li>
  <li>Riot.js</li>
</ul>
~~~
  `

  list_css = `
  ~~~css
  #customized {
    --ea-list-max-height: 15em;
    // if not defined  --ea-color-3 will be used
    --ea-list-background-color: #d4d6c8;

    & li:hover {
      background-color: #52524e;
    }

    & li:hover:not(:active) {
      background-color: #9a9b94;
    }
  }
}
`
  constructor() {}

  ngOnInit() {}
}
