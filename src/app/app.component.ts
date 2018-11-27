import { Component, OnInit, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { LayoutService } from 'projects/eamode/eang/src/services/layout.service'
import { MenuTreeItem } from '@eamode/eang'

export const SIDE_MENU = {
  name: 'Main menu',
  isHidden: true,
  children: [
    {
      name: 'Getting Started',
      data: {
        link: '/getstarted'
      }
    },
    {
      name: 'Components',
      data: {
        link: '/components'
      }
    },
    {
      name: 'Buttons',
      icon: 'ea-button-icon',
      data: {
        link: '/button'
      }
    },
    {
      name: 'Cards',
      icon: 'ea-layers',
      iconStyle: 'ea-negative',
      data: {
        link: '/card'
      }
    },
    {
      name: 'Icons',
      icon: 'ea-grid',
      iconStyle: 'ea-negative',
      data: {
        link: '/icon'
      }
    },
    {
      name: 'Layout',
      icon: 'ea-layout',
      data: {
        link: '/layout'
      }
    },
    {
      name: 'Menu',
      icon: 'ea-hamburger-menu',
      iconStyle: 'ea-negative',
      data: {
        link: '/menu'
      }
    },
    {

      name: 'Reactive',
      iconStyle: 'ea-negative',
      data: {
        link: '/reactive'
      }
    },
    {
      name: 'CSS Themes',
      iconStyle: 'ea-negative',
      data: {
        link: '/theming'

      name: 'Tabs',
      icon: 'ea-chevron-right',
      iconStyle: 'ea-negative',
      data: {
        link: '/tabs'

      }
    }
  ]
}

@Component({
  selector: 'eangio-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  public menu = SIDE_MENU
  activated: EventEmitter<MenuTreeItem> = new EventEmitter<MenuTreeItem>()

  constructor(public router: Router, public layout: LayoutService) {}

  shouldCloseDrawer() {
    if (this.layout.isDrawerOverlay) {
      this.layout.drawerState$.next('closed')
    }
  }

  onActivate(e, scrollContainer) {
    document.getElementsByTagName('ea-main')[0].scrollTop = 0
  }

  ngOnInit() {
    this.activated.subscribe((item: MenuTreeItem) => {
      this.router.navigate([item.data.link])
    })
  }
}
