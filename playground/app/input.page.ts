import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

import { Observable, Subject, of } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'pg-input',
  templateUrl: './input.page.html'
})
export class InputPageComponent {
  onOffCtl = new FormControl(true)

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.onOffCtl.valueChanges.subscribe(i => {
      console.log(i)
    })
  }
}
