import {
  Component,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'ea-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="ea-body"></ng-content>
    <ng-content select="ea-footer"></ng-content>
  `,
  styles: []
})
export class Main {
  @Input() suggestions: Observable<any>
  @Input() enabled

  @Output() readonly searchTerm = new EventEmitter<string>()
  @Output() selectedItem

  constructor() {}
}
