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
import { Subject } from 'rxjs/Subject'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'ea-autocomplete',
  template: `<input #inputField type="text"
    [value]="inputFieldValue"
    (keyup)="onKeyup($event)"
    (keydown)="onKeydown($event)"
    (blur)="onInputBlur($event)"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    aria-autocomplete="list">
  <ng-template #defaultTemplate let-item>{{item}}</ng-template>
  <ul *ngIf="!hidden && suggestions && suggestions.length > 0 ">
    <li *ngFor="let item of suggestions" (click)="select(item)" [attr.selected]="item === selectedItem ? '' : null">
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
  @Input() inputFieldDebounceTime = 400

  @Output() output = new EventEmitter()
  @Output() output$ = new Subject<any>()

  @Output() selectedItem = new EventEmitter()
  @Output() selectedItem$ = new Subject<any>()

  @Output() blur = new EventEmitter()

  @ViewChild('inputField') inputField
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  suggestions
  inputFieldValue = ''
  private defaultTemplate: TemplateRef<any>
  resultsContext
  selected = false
  hidden = false
  selectedIndex = 0
  private _inputSubscription: Subscription

  propagateChange = _ => {}
  touched = () => {}
  @Input() mapSelectItem = (item: any) => item.toString()
  ngOnInit() {
    this._inputSubscription = this.input.subscribe(s => {
      this.suggestions = s
    })

    this.output$
      .pipe(debounceTime(this.inputFieldDebounceTime))
      .subscribe(term => {
        this.hidden = false
        this.output.emit(term)
        this.propagateChange(term)
      })
    this.selectedItem$.pipe(distinctUntilChanged()).subscribe(selectedItem => {
      // this.selectedItem.emit(selectedItem)
      this.propagateChange(selectedItem)
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
  onKeyup(event) {
    if (this.inputFieldValue !== event.target.value) {
      this.inputFieldValue = event.target.value
      this.output$.next(this.inputFieldValue)
    }
  }

  onKeydown(event) {
    switch (event.key) {
      case 'ArrowDown':
        this.selectedIndex = Math.abs(
          --this.selectedIndex % this.suggestions.length
        )
        this.selectedItem = this.suggestions[this.selectedIndex]
        this.selectedItem$.next(this.selectedItem)
        event.preventDefault()
        break
      case 'ArrowUp':
        this.selectedIndex = Math.abs(
          ++this.selectedIndex % this.suggestions.length
        )
        this.selectedItem = this.suggestions[this.selectedIndex]
        this.selectedItem$.next(this.selectedItem)
        event.preventDefault()
        break
      case 'Escape':
        this.hidden = true
        break
    }

    console.log(event)
  }

  select(item) {
    this.selectedItem = item
    this.selectedItem$.next(item)
    const mappedItem = this.mapSelectItem(item)
    this.inputFieldValue = mappedItem
    this.hidden = true
  }

  onInputBlur(event) {
    this.touched()
    this.blur.emit(event)
  }
}
