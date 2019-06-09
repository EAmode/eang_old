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

  variables = `
  *style.pcss*
  ~~~ css
  /* overriding one common property accross all
     themes */
  :root {
    --ea-color-1: green;
  }

  /* overriding some common properties for
     the mode theme */
  .mode {
    --ea-color-2: #1f242c;
    --ea-color-3: #fff;
    --ea-color-accent-1: #298c1d;
    --ea-color-accent-2: #3f6eb5;
    --ea-color-background-1: #ffffff;
    --ea-color-background-2: #3e3e3e;
  }

  /* changing the properties of a left aligned panel */
  ea-panel[orientation='left'] {
    --ea-panel-color: var(--ea-color-3);
    --ea-panel-max-width: 6rem;
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
        --ea-panel-background: green;
      }
    </style>
    ...
  </div>
  <!-- component properties can also be changed
       individually -->
  <ea-panel style="--ea-panel-background: pink;"></ea-panel>
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
