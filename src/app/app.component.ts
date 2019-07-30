import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LayoutService } from 'projects/eamode/eang/src/services/layout.service'
import { EangElement } from '@eamode/eang'
import { Subject } from 'rxjs'

@Component({
  selector: 'eangio-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  menu = {
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
        name: 'Styles',
        iconStyle: 'ea-negative',
        children: [
          {
            name: 'Theme',
            icon: 'ea-color',
            iconStyle: 'ea-negative',
            data: {
              link: '/variables'
            }
          },
          {
            name: 'Utilities',
            icon: 'ea-refresh-cw',
            iconStyle: 'ea-negative',
            data: {
              link: '/utilities'
            }
          }
        ]
      },
      {
        name: 'Components',
        iconStyle: 'ea-negative',
        data: {
          link: '/components'
        },
        children: [
          // {
          //   name: 'Autocomplete',
          //   icon: 'ea-check-circle',
          //   iconStyle: 'ea-negative',
          //   data: {
          //     link: '/markdown'
          //   }
          // },
          {
            name: 'Buttons',
            icon: 'ea-button-icon',
            data: {
              link: '/button'
            }
          },
          // {
          //   name: 'Banner',
          //   icon: 'ea-button-icon',
          //   data: {
          //     link: '/banner'
          //   }
          // },
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
          // {
          //   name: 'Markdown',
          //   icon: 'ea-edit',
          //   iconStyle: 'ea-negative',
          //   data: {
          //     link: '/markdown'
          //   }
          // },
          {
            name: 'Menu',
            icon: 'ea-hamburger-menu',
            iconStyle: 'ea-negative',
            data: {
              link: '/menu'
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
            name: 'List',
            icon: 'ea-align-left',
            iconStyle: 'ea-negative',
            data: {
              link: '/list'
            }
          },
          {
            name: 'Tabs',
            icon: 'ea-tabs-icon',
            data: {
              link: '/tabs'
            }
          },
          {
            name: 'Table',
            icon: 'ea-tab',
            iconStyle: 'ea-negative',
            data: {
              link: '/table'
            }
          }
          // {
          //   name: 'Tooltip',
          //   icon: 'ea-help-circle',
          //   iconStyle: 'ea-negative',
          //   data: {
          //     link: '/tooltip'
          //   }
          // }
        ]
      }
    ]
  }
  activate = new Subject<EangElement>()

  constructor(public router: Router, public layout: LayoutService) {}

  shouldCloseDrawer() {
    if (this.layout.isDrawerOverlay) {
      this.layout.drawerState$.next('closed')
    }
  }
  closeDrawer() {
    this.layout.drawerState$.next('closed')
  }

  onActivate(e, scrollContainer) {
    document.getElementsByTagName('ea-main')[0].scrollTop = 0
  }

  ngOnInit() {
    this.layout.drawerState$.next('closed')

    this.activate.subscribe(item => {
      if (item.data && item.data.link) {
        this.router.navigate([item.data.link])
      }
    })
  }
}
