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
  |  .ea-card   |  the container for the card, where the box-shadow is set |
  |  .ea-card-header   |  container for holding the title and navigation elements of the card at the top  |
  |  .ea-card-content   |  meant for holding the main content of the card   |
  |  .ea-card-footer   |  located at the bottom of the card and meant for holding action buttons and error messages  |
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
        <span icon sign-in></span>
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
