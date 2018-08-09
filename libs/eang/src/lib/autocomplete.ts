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
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { Observable, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators'

@Component({
  selector: 'ea-autocomplete',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <input #inputField type="text"
    (input)="input.emit($event)"
    (keyup)="keyup.emit($event)"
    (keydown)="keydown.emit($event)"
    (focus)="focus.emit($event)"
    (blur)="blur.emit($event)"
    (click)="click.emit($event)"
    [placeholder]="placeholder"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    aria-autocomplete="list">
  <ng-template #defaultTemplate let-item>{{item}}</ng-template>
  <ng-container *ngIf="suggestionOptions | async as currentSuggestions">
    <ul *ngIf="showPanel && currentSuggestions.length > 0">
      <li *ngFor="let item of currentSuggestions; index as i"
        (click)="select(item,i)"
        [attr.data-index]="i"
        [attr.selected]="item === selectedItem ? '' : null"
        [attr.selection-focus]="i === selectionFocusIndex ? '' : null">
        <ng-container *ngTemplateOutlet="resultsTemplate || defaultTemplate; context: { $implicit: item }"></ng-container>
      </li>
    </ul>
  </ng-container>
  `
})
export class AutocompleteComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() suggestions: Observable<any>
  @Input() placeholder
  @Input() selectFirst = false
  @Input() maxItems = Math.max // should rather limit suggestion in first place
  @Input('disabled')
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled)
  }
  @Input() inputFieldDebounceTime = 400
  @Input() mapSelectItem = (item: any) => item.toString()

  @Output() readonly searchTerm = new EventEmitter<string>()
  @Output() readonly suggestionOptions = new EventEmitter<string>()
  @Output() readonly itemSelected = new EventEmitter()
  @Output() readonly input = new EventEmitter<any>()
  @Output() readonly click = new EventEmitter<MouseEvent>()
  @Output() readonly keyup = new EventEmitter<KeyboardEvent>()
  @Output() readonly keydown = new EventEmitter<KeyboardEvent>()
  @Output() readonly focus = new EventEmitter<FocusEvent>()
  @Output() readonly blur = new EventEmitter<FocusEvent>()

  @Output() selectedItem

  @ViewChild('inputField') inputField
  @ViewChild('suggestionPanel') suggestionPanel
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  currentSuggestions: any[]
  showPanel = true
  selectionFocusIndex = -1
  selectionFocusItem
  private _suggestionSub: Subscription
  private propagateChange = _ => {}
  private touched = () => {}

  ngOnInit() {
    this._suggestionSub = this.suggestions.subscribe(s => {
      this.selectedItem = undefined
      this.selectionFocusItem = undefined
      this.selectionFocusIndex = -1
      this.currentSuggestions = s
      this.suggestionOptions.emit(s)
    })

    this.input
      .pipe(
        debounceTime(this.inputFieldDebounceTime),
        map(e => (<HTMLInputElement>e.target).value),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.showPanel = true
        this.searchTerm.emit(term)
        this.propagateChange(term)
      })

    this.keydown.subscribe(event => {
      this.showPanel = true
      switch (event.key) {
        case 'ArrowDown':
          this.selectionFocusIndex =
            ++this.selectionFocusIndex % this.currentSuggestions.length
          this.selectionFocusItem = this.currentSuggestions[
            this.selectionFocusIndex
          ]
          event.preventDefault()
          break
        case 'ArrowUp':
          this.selectionFocusIndex =
            --this.selectionFocusIndex % this.currentSuggestions.length
          if (this.selectionFocusIndex < 0) {
            this.selectionFocusIndex = this.currentSuggestions.length + -1
          }
          this.selectionFocusItem = this.currentSuggestions[
            this.selectionFocusIndex
          ]
          event.preventDefault()
          break
        case 'Tab':
          this.showPanel = false
          if (
            this.selectedItem &&
            this.selectedItem === this.selectionFocusItem
          ) {
            break
          }
          if (this.selectionFocusItem) {
            this.select(
              this.selectionFocusItem,
              this.selectionFocusIndex,
              false
            )
          } else if (this.selectFirst && this.currentSuggestions.length > 0) {
            this.select(this.currentSuggestions[0], 0, false)
          }
          break
        case 'Enter':
          this.select(this.selectionFocusItem, this.selectionFocusIndex)
          break
        case 'Escape':
          this.showPanel = true
          break
      }
    })

    this.click.subscribe(e => {
      this.showPanel = !this.showPanel
    })

    this.blur.subscribe(e => {
      this.touched()
    })
  }

  writeValue(value: any): void {
    if (value) {
      this.inputField.nativeElement.value = value
    }
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

  select(item, index, focus = true) {
    this.selectedItem = item
    this.selectionFocusIndex = index
    this.inputField.nativeElement.value = this.mapSelectItem(item)
    this.showPanel = false
    if (focus) {
      this.inputField.nativeElement.focus()
    }
    this.itemSelected.emit(item)
  }

  ngOnDestroy(): void {
    this._suggestionSub.unsubscribe()
  }
}
