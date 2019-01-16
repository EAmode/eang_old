import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-utilities',
  templateUrl: './utilities.component.html',
  styles: []
})
export class UtilitiesComponent implements OnInit {
  variables_1 = `
~~~html
<div role="list">
  <div role="listitem"></div>
</div>
~~~
  `
  variables_2 = `
  ~~~css

  role="list" {
    --ea-list-max-height: 15em;
  }
  role="listitem" {
     --ea-listitem-background-hover: var(--ea-color-1);
     --ea-listitem-background-active: var(--ea-color-1-light);
     --ea-listitem-color-hover: var(--ea-color-3);
     --ea-listitem-color-active: var(--ea-color-3);
     --ea-listitem-height: 2.5em;
   }
  ~~~
    `
  constructor() {}

  ngOnInit() {}
}
