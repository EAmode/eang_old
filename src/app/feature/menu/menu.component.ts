import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  node = {
    name: 'Main menu',
    icon: 'ea-hamburger-menu',
    iconStyle: 'ea-negative',
    isHidden: true,
    children: [
      {
        name: 'Notification',
        icon: 'ea-bell',
        iconStyle: 'ea-aqua',
        data: {
          link: '/card'
        }
      },
      {
        name: 'Cards',
        icon: 'ea-layers',
        toggleRightPosition: true,
        iconStyle: 'ea-AntiqueWhite',
        data: {
          link: '/card'
        }
      },
      {
        name: 'Library',
        icon: 'ea-align-right',
        iconStyle: 'ea-negative',
        data: {
          link: '/icon'
        },
        children: [
          {
            name: 'Book',
            icon: 'ea-bookmark',
            data: {
              link: '/special'
            }
          },
          {
            name: 'Book2',
            icon: 'ea-bookmark',
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
  nodeWithNameTemplate
  nodeWithRightToggle = {
    name: 'Main menu',
    icon: 'ea-hamburger-menu',
    iconStyle: 'ea-negative',
    isHidden: false,
    toggleRight: true,
    children: [
      {
        name: 'Archive',
        icon: 'ea-archive ',
        iconStyle: 'ea-negative'
      },
      {
        name: 'Wi-Fi',
        icon: 'ea-wifi',
        iconStyle: 'ea-negative'
      }
    ]
  }

  nodeWithMod = {
    name: 'Main menu',
    icon: 'hamburger-menu',
    isHidden: false,
    children: [
      {
        name: 'Archive',
        icon: 'archive ',
        iconStyle: 'aqua'
      },
      {
        name: 'Wi-Fi',
        icon: 'wifi',
        iconStyle: 'aqua'
      }
    ]
  }

  constructor() {}

  ngOnInit() {
    this.nodeHorizontal = JSON.parse(JSON.stringify(this.node))
    this.nodeHorizontal.horizontal = true

    this.nodeHiddenFalse = JSON.parse(JSON.stringify(this.node))
    this.nodeHiddenFalse.isHidden = false

    this.nodeWithTemplate = JSON.parse(JSON.stringify(this.node))
    this.nodeWithNameTemplate = JSON.parse(JSON.stringify(this.node))

    this.nodeWithTemplate.children[0].data.description =
      'Notification description'
    this.nodeWithNameTemplate.children[0].data.header =
      'The name of the first paragraph'
    this.nodeWithTemplate.children[1].data.description = 'Cards description'
    this.nodeWithNameTemplate.children[1].data.header =
      'The name of the second paragraph'
    this.nodeWithNameTemplate.children[2].data.header =
      'The name of the first container'
    this.nodeWithNameTemplate.children[2].children[0].data.header =
      'The first content text'
    this.nodeWithNameTemplate.children[2].children[1].data.header =
      'The second content text'
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

  ea_menu_template = `
  *component.html*
  ~~~html
  <ea-menu
    [node]="nodeWithTemplate"
    [controlPanelTemplate]="templateMenu">
  </ea-menu>
  <ng-template #templateMenu let-data="node.data">
    <div *ngIf="data">{{data.description}}</div>
  </ng-template>
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
      iconStyle: 'aqua'
    },
    {
      name: 'Wi-Fi',
      icon: 'wifi',
      iconStyle: 'aqua'
    }
    ]
  }
  `
}
