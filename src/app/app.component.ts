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
      icon: 'ea-power',
      data: {
        link: '/getting-started'
      }
    },
    {
      name: 'Feature Highlights',
      icon: 'ea-loader',
      data: {
        link: '/'
      }
    },
    {
      name: 'Components',
      icon: 'ea-code',
      iconStyle: 'ea-negative',
      children: [
        {
          name: 'Autocomplete',
          icon: 'ea-layers',
          iconStyle: 'ea-negative',
          data: {
            link: '/card'
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
  activated = new EventEmitter<MenuTreeItem>()

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
      if (item.data && item.data.link) {
        this.router.navigate([item.data.link])
      }
    })
  }
}
