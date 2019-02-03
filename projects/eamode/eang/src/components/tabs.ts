import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  EventEmitter,
  TemplateRef,
  ContentChild,
  HostBinding,
  Input
} from '@angular/core'
import { MenuTreeItem } from './menu'
import { Subject } from 'rxjs'

@Component({
  selector: 'ea-tab',
  template: `
    <ng-content></ng-content>
  `
})
export class TabComponent {
  @HostBinding('attr.active') active
  @HostBinding('attr.closed') closed

  @Input() name: string
  @Input() closeable = false
}

@Component({
  selector: 'ea-tabpanel',
  template: `
    <ng-content select="ea-tab"></ng-content>
  `
})
export class TabPanelComponent implements AfterContentInit {
  @HostBinding('attr.role') role = 'tabpanel'
  @ContentChildren(TabComponent) tabQueryList: QueryList<TabComponent>
  _tabs = new Subject<TabComponent[]>()
  get tabs() {
    return this._tabs.asObservable()
  }
  constructor() {}

  ngAfterContentInit() {
    this._tabs.next(this.tabQueryList.toArray())
    this.tabQueryList.changes.subscribe(t => {
      this._tabs.next(t)
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
      [activateEvents]="activated"
      [closeEvents]="closed"
      [nameAreaTemplate]="headerTemplate"
      [optionAreaTemplate]="optionTemplate"
    >
    </ea-menu>
  `
})
export class TabListComponent implements AfterContentInit {
  @HostBinding('attr.role') role = 'tablist'

  @ContentChild('headerTemplate') headerTemplate: TemplateRef<{}>
  @ContentChild('optionTemplate') optionTemplate: TemplateRef<{}>

  @Input() tabpanel: TabPanelComponent
  menuItems: MenuTreeItem[]
  private _tabs: TabComponent[]

  activeTab
  activated = new EventEmitter<MenuTreeItem>()
  closed = new EventEmitter<MenuTreeItem>()

  constructor() {}

  ngAfterContentInit() {
    this.tabpanel.tabs.subscribe(t => {
      this.resetState(t)
    })

    this.activated.subscribe((activatedItem: MenuTreeItem) => {
      const activeTab = this._tabs.find(tab => tab.name === activatedItem.name)
      this.activateTab(activeTab)
    })

    this.closed.subscribe((closedItem: MenuTreeItem) => {
      const closedTab = this._tabs.find(tab => tab.name === closedItem.name)
      closedTab.closed = ''

      if (this.activeTab === closedTab && this._tabs.length > 0) {
        this.activateTab(this._tabs[0])
      }
    })
  }

  private activateTab(tab: TabComponent) {
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

  private resetState(tabs: TabComponent[]) {
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
  }
}
