import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'demo-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  results: Observable<any>
  constructor() { }
  search(term) {
    console.log(term)
    this.results = Observable.of(Array.from(term))
  }

}
