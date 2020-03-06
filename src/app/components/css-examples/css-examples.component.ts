import { Component } from '@angular/core'

@Component({
  selector: 'eangio-banner',
  templateUrl: './css-examples.component.html',
  styleUrls: ['./css-examples.component.scss']
})
export class CssExamplesComponent {
  banner_div = `
  ~~~html
  <style type="text/css">
    .my-banner {
      --ea-color: white;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      background: var(--ea-color-1);
      padding: calc(var(--ea-spacer) * 2.1em) calc(var(--ea-spacer) * 2em);
      margin-bottom: calc(var(--ea-spacer) * 1.5em);
      font-weight: calc(var(--ea-sizer) * 800);
    }
  </style>
  <div class="my-banner" role="banner" m-0-0-2-0>
    <h1>Button</h1>
    <span icon button-icon negative style="width: 2rem; height:2rem;"></span>
  </div>
  ~~~
        `

  role_banner_table = `
  |  CSS Variables   | Description  | Default |
  |---|---|----|
  |  \`--ea-banner-height\`  |  Sets the height of the banner  | 6em |
  |  \`--ea-banner-font-weight\`   |  Sets the weight of the banner font   | 700 |
  | \`--ea-banner-font-size\` | Sets the font size of the main Banner text | 3em |
  | \`--ea-banner-background\` | Sets the background of the banner | var(--ea-color-1) |
  | \`--ea-banner-color\` | Sets the color of the banner font | var(--ea-color-3) |
    `
  constructor() {}
}
