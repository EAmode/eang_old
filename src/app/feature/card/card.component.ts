import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  card = `
  ~~~css
  .ea-card {
    /* defaults to flex with a wrap */
    display:flex;
    flex-direction: column;
  }
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
