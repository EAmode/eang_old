import { Component, OnInit, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { LayoutService } from 'projects/eamode/eang/src/services/layout.service'
import { MenuTreeItem } from '@eamode/eang'

export const SIDE_MENU = {
  name: 'Main menu',
  isHidden: true,
  children: [
    {
      name: 'Get Started',
      data: {
        link: '/getting-started'
      }
    },
    {
      name: 'Feature Highlights',
      data: {
        link: '/features'
      }
    },
    {
      name: 'Components',
      iconStyle: 'ea-negative',
      data: {
        link: '/components'
      },
      children: [
        {
          name: 'Layout',
          icon: 'ea-layout',
          data: {
            link: '/layout'
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
          name: 'Buttons',
          icon: 'ea-button-icon',
          data: {
            link: '/button'
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
          name: 'Menu',
          icon: 'ea-hamburger-menu',
          iconStyle: 'ea-negative',
          data: {
            link: '/menu'
          }
        },
        {
          name: 'Tabs',
          icon: 'ea-tabs-icon',
          data: {
            link: '/tabs'
          }
        }
      ]
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
  closeDrawer() {
    this.layout.drawerState$.next('closed')
  }

  drawerState$ = this.layout.drawerState$.next('closed')

  onActivate(e, scrollContainer) {
    document.getElementsByTagName('ea-main')[0].scrollTop = 0
  }

  ngOnInit() {
    this.activated.subscribe((item: MenuTreeItem) => {
      if (item.data && item.data.link) {
        this.router.navigate([item.data.link])
      }
    })
  }
}
