import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'ea-autocomplete',
  template: `<input type="text" [formControl]="term" autocomplete="off" autocorrect="off" autocapitalize="off" aria-autocomplete="list">
  <ng-template #defaultTemplate let-item>{{item}}</ng-template>
  <ul>
    <li *ngFor="let item of results | async">
      <ng-container *ngTemplateOutlet="resultsTemplate || defaultTemplate; context: { $implicit: item }"></ng-container>
    </li>
  </ul>`
})
export class AutocompleteComponent implements OnInit {
  @Input() results: Observable<any>
  @Output() search = new EventEmitter()
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>
  items: Observable<string[]>
  term = new FormControl()
  private defaultTemplate: TemplateRef<any>
  resultsContext

  ngOnInit() {
    this.term.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(term => {
        this.search.emit(term)
      })
  }
}
