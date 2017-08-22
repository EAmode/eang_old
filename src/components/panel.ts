import { Component, OnInit, Output, EventEmitter, Input, TemplateRef, ContentChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'ea-panel',
  template: `
  <ng-content></ng-content>
  `
})
export class PanelComponent {
  // items: Observable<Array<string>>
  // term = new FormControl()
  // @Input() results: Observable<any>
  // @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>
  // private defaultTemplate: TemplateRef<any>
  // @Output() search = new EventEmitter()

  // ngOnInit() {
  //   this.term.valueChanges
  //     .debounceTime(400)
  //     .distinctUntilChanged()
  //     .subscribe(term => this.search.emit(term))
  // }
}
