import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'

import { pipe } from 'rxjs'
import { map } from 'rxjs/operators'
import { airports } from './airports'
import { AutocompleteComponent } from '@eang/eang'

@Component({
  selector: 'ea-feature-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.css']
})
export class ThemingComponent implements OnInit {
  @ViewChild('from') from: AutocompleteComponent
  maxResults = 10
  airportResult1$
  airportSearchTerm1 = new FormControl('was')

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
      console.log('starting new search with:', searchTerm)
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
  ~~~ css
  /* overriding one common property accross all themes */
  :root {
    --ea-color-1: green;
  }

  /* overriding some common properties for the mode theme */
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
      /* all ea-panels have a green background within this div */
      ea-panel {
        --ea-panel-background: green;
      }
    </style>
    ...
  </div>
  <!-- component properties can also be changed individually -->
  <ea-panel style="--ea-panel-background: pink;"></ea-panel>
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
