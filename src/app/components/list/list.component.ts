import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  role_list = `
~~~html
<div role="list">
  <div role="listitem"></div>
</div>
~~~
  `
  role_list_css = `
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
