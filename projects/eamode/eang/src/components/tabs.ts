import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  EventEmitter,
  TemplateRef,
  ContentChild,
  HostBinding,
  Input,
  OnDestroy,
  Renderer2,
  ElementRef
} from '@angular/core'
import { Subject, Subscription, Observable, combineLatest } from 'rxjs'
import { EangElement } from '../core'

@Component({
  selector: 'ea-tabpanel',
  template: `
    <ng-content></ng-content>
  `
})
export class TabpanelComponent implements EangElement {
  @HostBinding('attr.role') role = 'tabpanel'
  @HostBinding('attr.closed') closed: string
  @HostBinding('attr.active') active: string

  @Input() @HostBinding('attr.id') id: string
  @Input() name: string
  @Input() closeable = false

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  private _isActive = false
  @Input() set isActive(isActive: boolean) {
    this._isActive = isActive
    this.active = isActive ? '' : undefined
    if (this.active !== undefined) {
      this.renderer.setAttribute(this.el.nativeElement, 'active', this.active)
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'active')
    }
  }
  get isActive() {
    return this._isActive
  }
}

@Component({
  selector: 'ea-tabpanel-group',
  template: `
    <ng-content select="ea-tabpanel"></ng-content>
  `
})
export class TabpanelGroupComponent implements AfterContentInit {
  @ContentChildren(TabpanelComponent)
  tabQueryList: QueryList<TabpanelComponent>
  _tabs = new Subject<TabpanelComponent[]>()
  get tabs() {
    return this._tabs.asObservable()
  }

  @Input() activate$: Observable<string>

  ngAfterContentInit() {
    this._tabs.next(this.tabQueryList.toArray())
    this.tabQueryList.changes.subscribe(t => {
      this._tabs.next(t.toArray())
    })
  }
}

@Component({
  selector: 'ea-tablist',
  template: `
    <ea-menu
      *ngFor="let t of tabs"
      role="tab"
      [attr.aria-label]="t.name"
      [node]="t"
      [activateSubject]="activateSubject"
      [closeEvents]="closed"
      [nameAreaTemplate]="headerTemplate"
      [optionAreaTemplate]="optionTemplate"
    >
    </ea-menu>
  `
})
export class TabListComponent implements AfterContentInit, OnDestroy {
  @HostBinding('attr.role') role = 'tablist'

  @ContentChild('headerTemplate', { static: true })
  headerTemplate: TemplateRef<{}>
  @ContentChild('optionTemplate', { static: true })
  optionTemplate: TemplateRef<{}>

  @Input() tabpanelGroup: TabpanelGroupComponent
  @Input() activateSubject = new Subject<EangElement>()
  @Input() activated$: Observable<EangElement>
  menuItems: EangElement[]

  activeTab: EangElement
  closed = new EventEmitter<EangElement>()
  tabs = [] as EangElement[]

  private _tabsSub: Subscription

  ngAfterContentInit() {
    if (!this.activated$) {
      this.activated$ = this.activateSubject.asObservable()
    }
    combineLatest(this.activated$, this.tabpanelGroup.tabs).subscribe(
      ([activatedTab, tabsInGroup]) => {
        if (this.activeTab === activatedTab) {
          return
        }
        const tab = tabsInGroup.find(x => x.name === activatedTab.name)
        if (tab) {
          tab.isActive = true
          if (this.activeTab) {
            this.activeTab.isActive = false
          }
          this.activeTab = tab
        } else {
          throw new Error(
            `Tab ${activatedTab.id || activatedTab.name} does not exist!`
          )
        }
      }
    )

    this._tabsSub = this.tabpanelGroup.tabs.subscribe(tabpanels => {
      this.tabs = tabpanels
      const hasActiveTab = this.activeTab
        ? tabpanels.find(x => x.name === this.activeTab.name)
        : undefined
      if ((!this.activeTab || !hasActiveTab) && this.tabs.length > 0) {
        this.activeTab = this.tabs[0]
        this.activeTab.isActive = true
      }
    })
  }

  ngOnDestroy() {
    if (this._tabsSub) {
      this._tabsSub.unsubscribe()
    }
  }
}

@Component({
  selector: 'ea-tab',
  styles: [],
  template: `
    <div [hidden]="!active" style="padding: calc(var(--ea-sizer) * 1em);">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('tabTitle') title: string
  @Input() active = false
}

@Component({
  selector: 'ea-tabs',
  template: `
    <ul class="ea-tabs">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
        style="display: inline-flex;"
      >
        <a>{{ tab.title }}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: []
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active)

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first)
    }
  }

  selectTab(eaTab) {
    this.tabs.toArray().forEach(tab => (tab.active = false))

    eaTab.active = true
  }
}
