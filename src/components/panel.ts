import { Component, OnInit, Output, EventEmitter, Input, TemplateRef, ContentChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'ea-panel',
  template: `
  <input type="text" [formControl]="term" autocomplete="off" autocorrect="off" autocapitalize="off" aria-autocomplete="list">
  <ng-template #defaultTemplate let-item>{{item}}</ng-template>
  <ul>
    <li *ngFor="let item of results | async">
      <ng-template [ngTemplateOutlet]="resultsTemplate || defaultTemplate" [ngOutletContext]="{ $implicit: item }">{{item}}</ng-template>
    </li>
  </ul>`
})
export class AutocompleteComponent implements OnInit {
  items: Observable<Array<string>>
  term = new FormControl()
  @Input() results: Observable<any>
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>
  private defaultTemplate: TemplateRef<any>
  @Output() search = new EventEmitter()

  ngOnInit() {
    this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search.emit(term))
  }
}
