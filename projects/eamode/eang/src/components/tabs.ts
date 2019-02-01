import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  EventEmitter,
  TemplateRef,
  ContentChild
} from '@angular/core'
import { MenuTreeItem } from './menu'
import { TabComponent } from './tab'

@Component({
  selector: 'ea-tabs',
  template: `
    <ea-menu
      [node]="menu"
      [activateEvents]="activated"
      [closeEvents]="closed"
      [nameAreaTemplate]="headerTemplate"
      [optionAreaTemplate]="optionTemplate"
    >
    </ea-menu>
    <ng-content select="ea-tab"></ng-content>
  `,
  styles: []
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
  @ContentChild('headerTemplate') headerTemplate: TemplateRef<{}>
  @ContentChild('optionTemplate') optionTemplate: TemplateRef<{}>

  menu: MenuTreeItem = {
    name: 'Main',
    horizontal: true,
    isHidden: true,
    children: []
  }
  activeTab
  activated = new EventEmitter<MenuTreeItem>()
  closed = new EventEmitter<MenuTreeItem>()

  constructor() {}

  activateTab(tab: TabComponent) {
    if (this.activeTab) {
      this.activeTab.active = undefined
    }
    tab.active = ''
    this.activeTab = tab
    // this.tabs.forEach(tab => (tab.activeAttr = null))
    // activeTab.activeAttr = ''
  }

  closeTab(closedTab: TabComponent) {
    closedTab.closed = ''

    if (this.activeTab === closedTab) {
      closedTab = undefined
      if (this.tabs && this.tabs.length > 0) {
        this.activateTab = this.tabs[0]
        this.activeTab.active = ''
      }
    }
    // if (closedTab.activeAttr === '') {
    //   const openedTabs = this.tabs.filter(tab => tab.closedAttr !== '')
    //   if (openedTabs.length > 0) {
    //     const openedMenus = this.menu.children.filter(child => !child.isHidden)
    //     openedMenus[0].isActive = true
    //     this.activateTab(openedTabs[0])
    //   } else {
    //     closedTab.activeAttr = null
    //   }
    // }
  }

  ngAfterContentInit() {
    this.tabs.changes.subscribe(_ => {
      this.resetState(this.tabs)
    })
    if (this.tabs) {
      this.resetState(this.tabs)
    }

    this.activated.subscribe((activatedItem: MenuTreeItem) => {
      const activeTab = this.tabs.find(tab => tab.name === activatedItem.name)
      this.activateTab(activeTab)
    })

    this.closed.subscribe((closedItem: MenuTreeItem) => {
      const closedTab = this.tabs.find(tab => tab.name === closedItem.name)
      this.closeTab(closedTab)
    })
  }

  private resetState(tabs) {
    let hasActive = false
    this.menu.children = tabs.map(t => {
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

    if (!hasActive) {
      this.activateTab(this.tabs.first)
      this.menu.children[0].isActive = true
    }
  }
}
