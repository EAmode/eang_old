import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Component({
  selector: 'pg-autocomplete',
  templateUrl: './autocomplete.page.html'
})
export class AutocompletePageComponent {
  results = of([])

  constructor() {
    this.results.subscribe(i => {
      console.log(i)
    })
  }

  onSearch(term: string) {
    console.log(term)
    console.log(Array.from(term))
    this.results = of(Array.from(term))
  }
}
