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
import { LayoutService, DrawerState } from '../services/layout.service'

@Component({
  selector: 'ea-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-container *ngIf="(layout.drawerState$ | async) as drawerState">
  <div class="ea-icon-button" (click)="layout.drawerState$.next(DrawerState.maximized)"
        [class.menu-close]="drawer"
        [class.menu-open]="!drawer">
        </div>
        {{drawerState}}
</ng-container>
  <ng-content select="[ea-toolbar-header]"></ng-content>
  <ng-content select="[ea-toolbar-action]"></ng-content>
  <ng-content select="[ea-toolbar-buttons]"></ng-content>
  <ng-content></ng-content>
  `,
  styles: []
})
export class Toolbar implements OnInit, OnDestroy {
  @Input() suggestions: Observable<any>
  @Input() enabled

  @Output() readonly searchTerm = new EventEmitter<string>()
  @Output() selectedItem

  @ViewChild('inputField') inputField
  @ViewChild('suggestionPanel') suggestionPanel
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  constructor(public layout: LayoutService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
