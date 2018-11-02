import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  sizing = `
  |  Class   | Description  |
  |---|---|
  |  .ea-card   |  this would set the panel to its closed state   |
  |  .ea-card-header   |  this would set the panel to its maximized, or open, state   |
  |  .ea-card-content   |  this would set the panel to its maximized, or open, state   |
  |  .ea-card-footer   |  this would set the panel to its maximized, or open, state   |
  `

  card = `
  ~~~css
  <div class="ea-card">
  <div class="ea-card-header" style="--ea-card-header-background: var(--ea-color-background-2); --ea-card-header-color: white;">
    <p>ea-card-header</p>
    <div>
      <button custom><span role="icon" style="--ea-button-icon: var(--ea-icon-download); --ea-icon-margin: 0;" icon></span></button>
      <button custom><span role="icon" style="--ea-button-icon: var(--ea-icon-add-file); --ea-icon-margin: 0;" icon></span></button>
    </div>
    <button custom><span role="icon" style="--ea-button-icon: var(--ea-icon-x); --ea-icon-margin: 0;" icon></span></button>
  </div>
  <div class="ea-card-content">
    <h2>ea-card-content</h2>
    <h3>Sub title</h3>
    <p>Body of what you want this card to do</p>
  </div>
  <div class="ea-card-footer">
    <button small>back</button>
    1/2
    <button small>next</button>
  </div>
</div>
  ~~~
  `

  ea_card_content_grid = `
  *card.css*
  ~~~css
  .ea-card-content {
    .
    .
    &[grid]{
      --ea-card-content-grid: var(--ea-card-content-grid, repeat(1 , 1fr));

      display: grid;
      grid-template-columns: var(--ea-card-content-grid);
    }
    .
    .
  }
  ~~~
  `


}
