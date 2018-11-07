import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  constructor() {}

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
  <div class="ea-card-header">
    <p>ea-card-header</p>
    <div content>
      <button icon>
        <span icon download></span>
      </button>
      <button icon>
        <span icon sign-in</span>
      </button>
    </div>
    <button icon>
      <span icon x></span>
    </button>
  </div>
  <div class="ea-card-content">
    <h2>ea-card-content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat purus ac ultrices maximus.
    Maecenas lacinia ipsum id est suscipit, non sollicitudin odio imperdiet.</p>
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
