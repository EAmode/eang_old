import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

import { BehaviorSubject, timer, of, pipe } from 'rxjs'
import { map, switchMap, share, take } from 'rxjs/operators'
import { airports } from './airports'

@Component({
  selector: 'ea-feature-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.css']
})
export class ThemingComponent implements OnInit {
  maxResults = 10
  airportResult1$
  airportSearchTerm1 = new FormControl()
  airportSearchPipe = pipe(
    map((searchTerm: string) => {
      const results = []
      if (!searchTerm || searchTerm === '') {
        return results
      }

      const regex = new RegExp(searchTerm, 'gi')
      console.log(searchTerm)
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
      // return airports
      //   .map(a => {
      //     let hasMatched = false
      //     const match = a.Name.replace(regex, m => {
      //       hasMatched = true
      //       return `<mark>${m}</mark>`
      //     })
      //     return hasMatched ? { name: a.Name, match } : undefined
      //   })
      //   .filter(matchedItem => !!matchedItem)
    })
  )

  mapSelectItem = item => item.name

  constructor() {
    this.airportResult1$ = this.airportSearchTerm1.valueChanges.pipe(
      this.airportSearchPipe
    )
  }

  ngOnInit() {}
}
