import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  node = {
    name: 'Main menu',
    icon: 'hamburger-menu',
    iconStyle: 'negative',
    isHidden: true,
    children: [
      {
        name: 'Notification',
        icon: 'bell',
        iconStyle: 'aqua',
        data: {
          link: '/card'
        }
      },
      {
        name: 'Cards',
        icon: 'layers',
        iconStyle: 'AntiqueWhite',
        data: {
          link: '/card'
        }
      },
      {
        name: 'Library',
        icon: 'align-right',
        iconStyle: 'aliceblue',
        data: {
          link: '/icon'
        },
        children: [
          {
            name: 'Book',
            icon: 'bookmark',
            data: {
              link: '/special'
            }
          },
          {
            name: 'Book2',
            icon: 'bookmark',
            data: {
              link: '/special2'
            }
          }
        ]
      }
    ]
  }

  nodeHorizontal
  nodeHiddenFalse
  nodeWithTemplate

  constructor() {}

  ngOnInit() {
    this.nodeHorizontal = JSON.parse(JSON.stringify(this.node))
    this.nodeHorizontal.horizontal = true

    this.nodeHiddenFalse = JSON.parse(JSON.stringify(this.node))
    this.nodeHiddenFalse.isHidden = false

    this.nodeWithTemplate = JSON.parse(JSON.stringify(this.node))
    this.nodeWithTemplate.children[0].data.description =
      'Notification description'
    this.nodeWithTemplate.children[1].data.description = 'Cards description'
  }

  ea_menu = `
  *component.html*
  ~~~html
  <ea-menu
    [node]="name_of_your_node">
  </ea-menu>
  ~~~
  `

  ea_menu_horizontal = `
  *component.ts*
  ~~~ts
  node = {
    ...
    horizontal: true,
    children: [
    {
      ...
    },
      ...
  }
  `
  node_example = `
  *component.ts*
  ~~~ts
  nodeExample = {
    name: 'Main menu',
    icon: 'hamburger-menu',
    horizontal: true,
    iconStyle: 'negative',
    isHidden: true,
    children: [
    {
      name: 'Archive',
      icon: 'archive ',
      iconStyle: 'aqua',
      data: {
        link: '/download'
      }
    },
    {
      name: 'Wi-Fi',
      icon: 'wifi',
      iconStyle: 'aqua',
      data: {
        link: '/wifi'
      }
    }
    ]
  }
  `
}
