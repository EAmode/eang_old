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
  <ea-menu [node]="menu" [activateEvents]="activated" [closeEvents]="closed"
  [nameAreaTemplate]="headerTemplate">
  </ea-menu>
  <ng-content select="ea-tab"></ng-content>
  `,
  styles: []
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>
  @ContentChild('headerTemplate')
  headerTemplate: TemplateRef<{}>

  menu: MenuTreeItem = {
    name: 'Main',
    horizontal: true,
    isHidden: true,
    children: []
  }
  activated = new EventEmitter<MenuTreeItem>()
  closed = new EventEmitter<MenuTreeItem>()

  constructor() {}

  activateTab(activeTab: TabComponent) {
    this.tabs.forEach(tab => (tab.activeAttr = null))
    activeTab.activeAttr = ''
  }

  closeTab(closedTab: TabComponent) {
    closedTab.closedAttr = ''
    if (closedTab.activeAttr === '') {
      const openedTabs = this.tabs.filter(tab => tab.closedAttr !== '')
      if (openedTabs.length > 0) {
        const openedMenus = this.menu.children.filter(child => !child.isHidden)
        openedMenus[0].isActive = true
        this.activateTab(openedTabs[0])
      } else {
        closedTab.activeAttr = null
      }
    }
  }

  ngAfterContentInit() {
    if (this.tabs.length > 0) {
      this.tabs.forEach(tab => {
        this.menu.children.push({ name: tab.name, closeable: tab.closeable })
      })

      this.menu.children[0].isActive = true
      this.activateTab(this.tabs.first)
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
}
