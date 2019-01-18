import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-utilities',
  templateUrl: './utilities.component.html',
  styles: []
})
export class UtilitiesComponent implements OnInit {
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

  role_button = `
~~~html
<a role="button" routerLink="/"></a>
<a role="button" outline routerLink="/"></a>
<a role="button" flat routerLink="/"></a>
~~~
  `

  role_button_css = `
  ~~~css
  role="button" {
     --ea-button-height
     --ea-button-background
     --ea-button-border-color
   }
  ~~~
    `
  role_banner = `
~~~html
<div role="banner">
  <h1>Banner</h1>
</div>
~~~
  `

  role_banner_css = `
~~~css
[role='banner'] {
  height: var(--ea-height, var(--ea-banner-height, 6em));
  background: var(--ea-background, var(--ea-banner-background,var(--ea-color-1)));
  box-shadow: var(--ea-box-shadow);
  padding: 3em;
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h1, h2, h3, h4, h5, h6, p {
    font-weight: var(--ea-font-weight, var(--ea-banner-font-weight ,800));
    color: var(--ea-color, var(--ea-banner-color,var(--ea-text-color-light)));
    display: flex;
    align-items: center;
  }
}
~~~
      `

  role_banner_listitem = `
  |  Attributes   | Type  | Description |
  |---|---|----|
  |  --ea-listitem-background-hover  |  Better to use string or number types  | Add identificator for your current node. |
  |  --ea-listitem-background-active   |  string   | Node name will be displayed on the site view. |
  | --ea-listitem-color-hover | boolean | Value used to change menu orientation. |
  | --ea-listitem-color-active | boolean | Place this attribute as "true" to hide parent node for children. |
  | --ea-listitem-height | array[] | Define array of children in that attribute. |
  | data (optional) | any | Place inside of this attribute any data. |
  `

  role_banner_table = `
  |  Attributes   | Description  | Default |
  |---|---|----|
  |  --ea-banner-height  |  Sets the height of the banner  | 6em |
  |  --ea-banner-font-weight   |  Sets the weight of the banner font   | Node name will be displayed on the site view. |
  | --ea-banner-font-size | boolean | Value used to change menu orientation. |
  | --ea-banner-background | boolean | Place this attribute as "true" to hide parent node for children. |
  | --ea-banner-color | array[] | Define array of children in that attribute. |
  `

  constructor() {}

  ngOnInit() {}
}
