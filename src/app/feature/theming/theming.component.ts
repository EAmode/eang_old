import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'

import { pipe } from 'rxjs'
import { map } from 'rxjs/operators'
import { airports } from './airports'
import { AutocompleteComponent } from '@eamode/eang'

@Component({
  selector: 'eangio-feature-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.css']
})
export class ThemingComponent implements OnInit {
  @ViewChild('from', { static: true })
  from: AutocompleteComponent
  maxResults = 10
  airportResult1$
  airportSearchTerm1 = new FormControl()

  airportResult2$
  airportSearchTerm2 = new FormControl()

  airportSearchPipe = pipe(
    map((searchTerm: string) => {
      const results = []
      if (!searchTerm || searchTerm === '') {
        return results
      }

      const regex = new RegExp(
        searchTerm.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&'),
        'gi'
      )
      for (const a of airports) {
        if (results.length >= this.maxResults) {
          break
        }
        let hasMatched = false
        const match = a.Name.replace(regex, m => {
          hasMatched = true
          return `<mark>${m}</mark>`
        })
        if (hasMatched) {
          results.push({ name: a.Name, match })
        }
      }
      return results
    })
  )

  override_button_example = `
  ~~~css
  button[flat][rounded] {
    --ea-button-background: #884e88;
  }

  .ea-button[outline][icon] {
    --ea-button-background: #884e88;
  }

  .ea-table > tbody > tr:hover {
    color: #884e88;
  }
  ~~~
`
  root_level = `
  ~~~ css
  /* overriding some common properties for
    the mode theme */
  .mode {
    --ea-color-1: hsl(223, 40%, 43%);
    --ea-background-color-hover: violet;
  }

  /* changing the properties of a left aligned panel */
  ea-panel[orientation='left'] {
    color: var(--ea-color-3);
    max-width: 6rem;
  }
  ~~~
  `

  scope = `
  ~~~ html
  <div class="my-secial-green-div">
    <style>
      <!-- all ea-panels have a green background within
           this div -->
      ea-panel {
        background: green;
      }
    </style>
    ...
  </div>
  <!-- component properties can also be changed
       individually -->
  <ea-panel style="background: pink;"></ea-panel>
  ~~~
  `

  allVariablesForOverride = `
  ~~~css
  .mode {
    /* Base Colors */
    --ea-color-1: hsl(223, 40%, 43%);
    --ea-color-1-light: hsl(223, 40%, 53%);

    /* Alternative Base Colors */
    --ea-color-2: hsl(0, 0%, 20%);
    --ea-color-2-light: hsl(0, 0%, 30%);

    --ea-color-3: hsl(0, 0%, 96%);
    --ea-color-3-dark: hsl(0, 0%, 86%);

    /* Accent Colors */
    --ea-color-accent-1: #6a9c45;
    --ea-color-accent-2: #0078d4;

    /* Semantic Colors */
    --ea-color-success: #5bb95b;
    --ea-color-info: #5ac1de;
    --ea-color-warning: #f1ae4e;
    --ea-color-danger: #d9534f;
    --ea-color-error: #d9534f;

    --ea-color-grey: hsl(0, 0%, 75%);
    --ea-color-grey-light: hsl(0, 0%, 85%);
    --ea-color-striped: rgba(139, 184, 232, 1);

    /* Text Colors */
    --ea-text-color: var(--ea-text-color-dark);
    --ea-text-color-dark: hsl(0, 0%, 20%);
    --ea-text-color-light: hsl(0, 0%, 96%);

    /* Hover, Active */
    --ea-background-color-hover: var(--ea-color-1);
    --ea-background-color-active: var(--ea-color-1-light);

    /* Fonts & Typography */
    --ea-font-1-family: 'Roboto';
    --ea-font-1-style: normal;
    --ea-font-1-weight: 400;
    --ea-scalar-factor: 24;

    font-family: var(--ea-font-1-family);
    font-style: var(--ea-font-1-style);
    font-weight: var(--ea-font-1-weight);

    /* Utilities */
    --ea-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.09);
   }
  ~~~
  `

  component = `
  ## Compose-ability

  The ability to override specific aspects of a component, and to default to base eang value is made easier with custom properties.
  Below is an example of the ea-card component and how it can be easily configured to have differing colors and backgrounds
  for the ea-card-header and the ea-card-footer.

  *card.css*
  ~~~ css
    .ea-card {
      --ea-card-color: var(--ea-card-color, var(--ea-color-1));
      --ea-card-background: var(--ea-card-background, var(--ea-color-3));
      .
      .
    }
  ~~~
The default values for the ea-card are the *--ea-card-color* and the *--ea-card-background*.

~~~ css
.ea-card {
  .
  .
  --ea-card-header-color: var(--ea-card-header-color, var(--ea-card-color));
  --ea-card-header-background: var(--ea-card-header-background, var(--ea-card-background));
}
~~~
The way it is written, unless --ea-card-header-color is defined, the header color will default to being the same color that is defined
for the --ea-card-color. The same method is applied to the --ea-card-header-background.
  ~~~ css
  .mode {
    & .ea-card {
      --ea-card-color: var(--ea-card-color, var(--ea-color-1));
      --ea-card-background: var(--ea-card-background, var(--ea-color-3));

      --ea-card-header-color: var(--ea-card-header-color, var(--ea-card-color));
      --ea-card-header-background: var(--ea-card-header-background, var(--ea-card-background));

      --ea-card-footer-color: var(--ea-card-footer-color, var(--ea-card-header-color, var(--ea-card-color)));
      --ea-card-footer-background: var(--ea-card-footer-background , var(--ea-card-header-background, var(--ea-card-background)));

      color: var(--ea-card-color);
      background: var(--ea-card-background);

      & .ea-card-header {
        color: var(--ea-card-header-color);
        background: var(--ea-card-header-background);
      }
      & .ea-card-content {
        color: var(--ea-card-content-color);
        background: var(--ea-card-content-background);
      }
      & .ea-card-footer {
        color: var(--ea-card-footer-color);
        background: var(--ea-card-footer-background);
      }
    }
  }
  ~~~
  `

  corporate = `
  ~~~ css
  /* overriding some common properties for the mode theme */
  .yourCorporateTheme {
    --theme-color-2: #1f242c;
    --theme-color-3: #fff;
    --theme-color-accent-1: #298c1d;
    --theme-color-accent-2: #3f6eb5;
    --theme-color-background-1: #ffffff;
    --theme-color-background-2: #3e3e3e;
  }

  /* changing the properties of a left aligned panel */
  ea-panel[orientation='left'] {
    --ea-panel-color: var(--ea-color-3);
    --ea-panel-max-width: 6rem;
  }
  ~~~
  `

  mapSelectItem = item => item.name

  constructor() {
    this.airportResult1$ = this.airportSearchTerm1.valueChanges.pipe(
      this.airportSearchPipe
    )
    this.airportResult2$ = this.airportSearchTerm2.valueChanges.pipe(
      this.airportSearchPipe
    )
  }

  ngOnInit() {
    this.from.itemSelected.subscribe(i => console.log('item selected', i))
  }
}
