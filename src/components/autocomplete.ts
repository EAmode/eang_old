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
  template: `<input type="text"
    [formControl]="ea_autocomplete_searchterm"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    aria-autocomplete="list">
  <ng-template #defaultTemplate let-item>{{item}}</ng-template>
  <ul>
    <li *ngFor="let item of input | async">
      <ng-container *ngTemplateOutlet="resultsTemplate || defaultTemplate; context: { $implicit: item }"></ng-container>
    </li>
  </ul>`
})
export class AutocompleteComponent implements OnInit {
  @Input() input: Observable<any>
  @Output() output = new EventEmitter()
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  ea_autocomplete_searchterm = new FormControl()
  private defaultTemplate: TemplateRef<any>
  resultsContext

  ngOnInit() {
    this.ea_autocomplete_searchterm.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(term => {
        this.output.emit(term)
      })
  }
}
