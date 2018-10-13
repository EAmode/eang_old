import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild,
  ViewChild,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators'
import { LayoutService } from '../services/layout.service'

@Component({
  selector: 'ea-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-content select="ea-toolbar"></ng-content>
  <ng-content  select="ea-main"></ng-content>
  <ng-content *ngIf="isDrawerOpen$ | async" select="ea-drawer"></ng-content>
  `,
  styles: []
})
export class Layout implements OnInit, OnDestroy {
  @Output() readonly searchTerm = new EventEmitter<string>()
  @Output() selectedItem

  @ViewChild('inputField') inputField
  @ViewChild('suggestionPanel') suggestionPanel
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  isDrawerOpen$ = this.layout.drawerState$.pipe(
    map(d => {
      return d === 'maximized'
    })
  )

  constructor(public layout: LayoutService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
