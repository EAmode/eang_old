import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild,
  forwardRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core'
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms'
import { Observable, Subject, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators'

@Component({
  selector: 'ea-autocomplete',
  template: `
  <input #inputField type="text"
    (value)="value.emit($event)"
    (input)="input.emit($event)"
    (keyup)="keyup.emit($event)"
    (keydown)="keydown.emit($event)"
    (focus)="focus.emit($event)"
    (blur)="blur.emit($event)"
    (click)="click.emit($event)"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    aria-autocomplete="list">
  <ng-template #defaultTemplate let-item>{{item}}</ng-template>
  <ng-container *ngIf="suggestions | async as list">
    <ul *ngIf="!hidden && list.length > 0">
      <li *ngFor="let item of list; index as i"
        (click)="select(item,i)"
        [attr.data-index]="i"
        [attr.selected]="item === selectedItem ? '' : null"
        [attr.selection-focus]="i === selectionFocusIndex ? '' : null">
        <ng-container *ngTemplateOutlet="resultsTemplate || defaultTemplate; context: { $implicit: item }"></ng-container>
      </li>
    </ul>
  </ng-container>
  `,
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() suggestions: Observable<any>
  @Input() maxItems = Math.max // should rather limit suggestion in first place
  @Input('disabled')
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled)
  }
  @Input() inputFieldDebounceTime = 400
  @Output() value = new EventEmitter<string>()
  @Output() input = new EventEmitter<any>()
  @Output() searchTerm = new EventEmitter<string>()
  @Output() click = new EventEmitter<MouseEvent>()
  @Output() keyup = new EventEmitter<KeyboardEvent>()
  @Output() keydown = new EventEmitter<KeyboardEvent>()
  @Output() focus = new EventEmitter<FocusEvent>()
  @Output() blur = new EventEmitter<FocusEvent>()
  // @Output() output$ = new Subject<any>()

  @Output() itemSelected = new EventEmitter()
  selectedItem
  // @Output() selectedItem$ = new Subject<any>()

  @ViewChild('inputField') inputField
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  currentSuggestions
  inputFieldValue = ''
  private defaultTemplate: TemplateRef<any>
  resultsContext
  selected = false
  hidden = false
  selectionFocusIndex = -1
  selectionFocusItem
  private _inputSubscription: Subscription
  private _prevInputValue: string
  propagateChange = _ => {}
  touched = () => {}
  @Input() mapSelectItem = (item: any) => item.toString()

  ngOnInit() {
    this._inputSubscription = this.suggestions.subscribe(s => {
      console.log('new suggestions', s)
      this.currentSuggestions = s
    })
    this.value.subscribe(v=>{
      console.log('value changed', v)
    })
    this.input.subscribe(i=>{
      console.log('input changed', i)
    })
    this.keyup
      .pipe(
        filter(e => {
          return !!(
            this._prevInputValue !== (<HTMLInputElement>event.target).value
          )
        }),
        map(e => (<HTMLInputElement>event.target).value),
        // filter(v => this._prevSearchTerm !== v),
        debounceTime(this.inputFieldDebounceTime),
        distinctUntilChanged()
      )
      .subscribe(term => {
        console.log('search term changed', term)
        this.hidden = false
        this._prevInputValue = term
        this.searchTerm.emit(term)
        this.propagateChange(term)
      })

    this.keydown.subscribe(event => {
      this._prevInputValue = (<HTMLInputElement>event.target).value
      this.hidden = false
      switch (event.key) {
        case 'ArrowDown':
          this.selectionFocusIndex++
          this.selectionFocusIndex =
            this.selectionFocusIndex % this.currentSuggestions.length
          this.selectionFocusIndex =
            this.selectionFocusIndex < 0
              ? this.currentSuggestions.length + this.selectionFocusIndex
              : this.selectionFocusIndex
          console.log('down', this.selectionFocusIndex)
          this.selectionFocusItem = this.currentSuggestions[
            this.selectionFocusIndex
          ]
          console.log('new selection focus on ', this.selectionFocusItem)
          event.preventDefault()
          break
        case 'ArrowUp':
          this.selectionFocusIndex--
          this.selectionFocusIndex =
            this.selectionFocusIndex % this.currentSuggestions.length
          this.selectionFocusIndex =
            this.selectionFocusIndex < 0
              ? this.currentSuggestions.length + this.selectionFocusIndex
              : this.selectionFocusIndex
          console.log('up', this.selectionFocusIndex)
          this.selectionFocusItem = this.currentSuggestions[
            this.selectionFocusIndex
          ]
          event.preventDefault()
          break
        case 'Tab':
        case 'Enter':
          this.select(this.selectionFocusItem, this.selectionFocusIndex)
          event.preventDefault()
          break
        case 'Escape':
          this.hidden = true
          break
      }
    })

    this.blur.subscribe(e => {
      console.log('got blured', e)
      //this.hidden = false
    })

    this.focus.subscribe(e => {
      console.log('got focused', e)
      // this.hidden = false
    })
    this.click.subscribe(e => {
      console.log('got clicked', e)
      this.hidden = !this.hidden
    })
  }

  ngAfterViewInit(): void {}

  writeValue(value: any): void {
    if (value) {
      this.inputField.nativeElement.value = value
    }
    //this.inputFieldValue = value
    console.log('write value', value)
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
  // onKeyup(event) {
  //   if (this.inputFieldValue !== event.target.value) {
  //     this.inputFieldValue = event.target.value
  //     this.output$.next(this.inputFieldValue)
  //   }
  // }

  // onKeydown(event) {}

  select(item, index) {
    console.log('selecting item', item, index)
    this.selectedItem = item
    this.selectionFocusIndex = index
    const mappedItem = this.mapSelectItem(item)
    this.inputField.nativeElement.value = mappedItem
    this.hidden = true
    this.itemSelected.emit(item)
  }

  onInputBlur(event) {
    this.touched()
    this.blur.emit(event)
  }

  onInputfocusout(event) {
    console.log('focus out', event)
  }
}
