import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild,
  forwardRef
} from '@angular/core'
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
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
  </ul>`,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AutocompleteComponent), multi: true },
  ]
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
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

  writeValue(obj: any): void {
    console.log(obj)
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.')
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.')
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.')
  }
}
