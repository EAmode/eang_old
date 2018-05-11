import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Component({
  selector: 'pg-autocomplete',
  templateUrl: './autocomplete.page.html'
})
export class AutocompletePageComponent {
  results = of([])

  constructor(private http: HttpClient) {
    this.results.subscribe(i => {
      console.log(i)
    })
  }

  onSearch(term: string) {
    console.log(term)
    console.log(Array.from(term))
    this.results = of(Array.from(term))
  }

  onNameSearch(name: string) {
    this.http
      .get(`uzby.com/api.php?min=3&max=8`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .subscribe(data => {
        console.log(data)
      })
  }
}
