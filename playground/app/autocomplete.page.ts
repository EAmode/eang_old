import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { map } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'pg-autocomplete',
  templateUrl: './autocomplete.page.html'
})
export class AutocompletePageComponent {
  results = of([])
  avatars = of([])

  avatarsArr = [
    {
      name: 'Han Solo',
      avatarUrl: 'https://api.adorable.io/avatars/140/1.png'
    },
    {
      name: 'Darth Vader',
      avatarUrl: 'https://api.adorable.io/avatars/140/2.png'
    },
    {
      name: 'Luke Skywalker',
      avatarUrl: 'https://api.adorable.io/avatars/140/3.png'
    },
    {
      name: 'Princess Leia',
      avatarUrl: 'https://api.adorable.io/avatars/140/4.png'
    },
    {
      name: 'Obi Wan',
      avatarUrl: 'https://api.adorable.io/avatars/140/5.png'
    },
    {
      name: 'Hulk',
      avatarUrl: 'https://api.adorable.io/avatars/140/6.png'
    },
    {
      name: 'Lando Clarissian',
      avatarUrl: 'https://api.adorable.io/avatars/140/7.png'
    }
  ]

  avatarForm: FormGroup

  avatarSearchTerm = new FormControl()

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.avatarForm = fb.group({
      name: '',
      country: ['', Validators.required]
    })
    this.avatars = this.avatarSearchTerm.valueChanges.pipe(
      map(i => this.avatarsArr.filter(a => a.name.toLowerCase().startsWith(i)))
    )
  }

  onSearch(term: string) {
    console.log(term)
    console.log(Array.from(term))
    this.results = of(Array.from(term))
  }
}
