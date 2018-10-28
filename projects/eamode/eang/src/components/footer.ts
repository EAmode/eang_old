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
  selector: 'ea-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class Footer {
  @Input() suggestions: Observable<any>
  @Input() enabled

  @Output() readonly searchTerm = new EventEmitter<string>()
  @Output() selectedItem

  @ViewChild('inputField') inputField
  @ViewChild('suggestionPanel') suggestionPanel
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  constructor() {}

}
