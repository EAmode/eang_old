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
  OnDestroy
} from '@angular/core'
import { Subject, Subscription, Observable } from 'rxjs'
import { EangElement } from '@eamode/eang'

@Component({
  selector: 'ea-tabpanel',
  template: `
    <ng-content></ng-content>
  `
})
export class TabpanelComponent {
  @HostBinding('attr.role') role = 'tabpanel'
  @HostBinding('attr.active') active: string
  @HostBinding('attr.closed') closed: string

  @Input() name: string
  @Input() closeable = false
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

  @Input()
  activated$: Observable<string>

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
      *ngFor="let m of menuItems"
      role="tab"
      [attr.aria-label]="m.name"
      [node]="m"
      [activateEvents]="activate$"
      [closeEvents]="closed"
      [nameAreaTemplate]="headerTemplate"
      [optionAreaTemplate]="optionTemplate"
    >
    </ea-menu>
  `
})
export class TabListComponent implements AfterContentInit, OnDestroy {
  @HostBinding('attr.role') role = 'tablist'

  @ContentChild('headerTemplate') headerTemplate: TemplateRef<{}>
  @ContentChild('optionTemplate') optionTemplate: TemplateRef<{}>

  @Input() tabpanelGroup: TabpanelGroupComponent
  @Input() activate$ = new Subject<EangElement>()
  @Input() activated$: Observable<EangElement>
  menuItems: EangElement[]

  activeTab: TabpanelComponent
  // activated = new EventEmitter<MenuTreeItem>()
  closed = new EventEmitter<EangElement>()

  private _tabs: TabpanelComponent[]
  private _tabsSub: Subscription

  ngAfterContentInit() {
    if (!this.activated$) {
      this.activated$ = this.activate$.asObservable()
    }

    this.activated$.subscribe((activatedItem: EangElement) => {
      const activeTab = this._tabs.find(tab => tab.name === activatedItem.name)
      this.activateTab(activeTab)
    })

    this._tabsSub = this.tabpanelGroup.tabs.subscribe(tabs => {
      let hasActive = false
      this._tabs = tabs
      this.menuItems = tabs.map(t => {
        const isActive = this.activeTab === t
        if (isActive) {
          hasActive = true
        }
        return {
          name: t.name,
          closeable: t.closeable,
          isActive
        }
      })

      if (!hasActive && this._tabs.length > 0) {
        this.activateTab(this._tabs[0])
        this.menuItems[0].isActive = true
      }
    })

    this.closed.subscribe((closedItem: EangElement) => {
      const closedTab = this._tabs.find(tab => tab.name === closedItem.name)
      closedTab.closed = ''

      if (this.activeTab === closedTab && this._tabs.length > 0) {
        this.activateTab(this._tabs[0])
      }
    })
  }

  ngOnDestroy() {
    if (this._tabsSub) {
      this._tabsSub.unsubscribe()
    }
  }

  private activateTab(tab: TabpanelComponent) {
    if (this.activeTab === tab) {
      return
    }
    if (this.activeTab) {
      this.activeTab.active = undefined
      const activeMenuItem = this.menuItems.find(
        m => m.name === this.activeTab.name
      )
      activeMenuItem.isActive = false
    }
    tab.active = ''
    this.activeTab = tab
  }
}
