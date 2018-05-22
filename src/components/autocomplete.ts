import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild,
  forwardRef,
  ViewChild
} from '@angular/core'
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'ea-autocomplete',
  template: `<input #inputField type="text"
    [value]="inputFieldValue"
    (blur)="onInputBlur($event)"
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
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
    // ,
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => AutocompleteComponent),
    //   multi: true
    // }
  ]
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  @Input() input: Observable<any>
  @Input('disabled')
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled)
  }
  @Output() output = new EventEmitter()
  @Output() blur = new EventEmitter()

  @ViewChild('inputField') inputField
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  inputFieldValue = ''
  ea_autocomplete_searchterm = new FormControl()
  private defaultTemplate: TemplateRef<any>
  resultsContext
  propagateChange = _ => {}
  touched = () => {}

  ngOnInit() {
    this.ea_autocomplete_searchterm.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(term => {
        this.output.emit(term)
        this.propagateChange(term)
      })
  }

  writeValue(obj: any): void {
    this.inputFieldValue = obj
    console.log(obj)
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }
  registerOnTouched(fn: any): void {
    this.touched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.inputField.nativeElement.disabled = isDisabled
  }

  onInputBlur(event) {
    this.touched()
    this.blur.emit(event)
  }
}
