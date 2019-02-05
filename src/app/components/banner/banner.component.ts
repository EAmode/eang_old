import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-banner',
  templateUrl: './banner.component.html',
  styles: []
})
export class BannerComponent implements OnInit {
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

  ngOnInit() {}
}
