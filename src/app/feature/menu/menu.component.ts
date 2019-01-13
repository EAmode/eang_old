import { Component, OnInit } from '@angular/core'
// import { MenuTreeItem } from '@eamode/eang/public_api'

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
            name: 'Book-lvl-1',
            icon: 'ea-bookmark',
            data: {
              link: '/special'
            },
            children: [
              {
                name: 'Book-lvl-2',
                icon: 'ea-bookmark',
                data: {
                  link: '/special'
                }
              },
              {
                name: 'Book-lvl-2-1',
                icon: 'ea-bookmark',
                data: {
                  link: '/special2'
                },
                children: [
                  {
                    name: 'Book-lvl-3',
                    icon: 'ea-bookmark',
                    data: {
                      link: '/special'
                    }
                  },
                  {
                    name: 'Book-lvl-3-1',
                    icon: 'ea-bookmark',
                    data: {
                      link: '/special2'
                    },
                    children: [
                      {
                        name: 'Book-lvl-4',
                        icon: 'ea-bookmark',
                        data: {
                          link: '/special'
                        }
                      },
                      {
                        name: 'Book-lvl-4-1',
                        icon: 'ea-bookmark',
                        data: {
                          link: '/special2'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
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

  modal = false
  dropdown
  nodeHorizontal
  nodeHiddenFalse
  nodeWithTemplate
  nodeWithNameTemplate
  nodeDropdown: any = {
    name: '',
    dropdown: true,
    children: [
      {
        name: 'Add object'
      },
      {
        name: 'Add Model'
      }
    ]
  }

  nodeDropdownsolo: any = {
    name: '',
    dropdown: true,
    children: [
      {
        name: 'Add'
      },
      {
        name: 'Delete'
      }
    ]
  }

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

  closeNode() {
    this.nodeDropdown.isOpen = false
    this.nodeDropdown.isActive = false
    this.nodeDropdownsolo.isOpen = false
    this.nodeDropdownsolo.isActive = false
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
    [node]="node"
    [optionAreaTemplate]="optionArea"
    [nameAreaTemplate]="nameArea"
    [toggleAreaTemplate]="toggleArea"
  >
  </ea-menu>

  <ng-template #optionArea let-node="node">
    <button flat icon *ngIf="node.isActive">
      <span icon vertical-menu negative></span>
    </button>
  </ng-template>
  <ng-template #nameArea let-node="node">
    <div>{{node.name}}</div>
  </ng-template>
  <ng-template #toggleArea let-node="node">
    <span *ngIf="node.isOpen" icon chevron-down negative>
    </span>
    <span *ngIf="!node.isOpen" icon chevron-right negative>
    </span>
  </ng-template>
  `

  ea_menu_attrs = `
  |  Attributes   | Type  | Description |
  |---|---|----|
  |  id (optional)   |  Better to use string or number types  | Add identificator for your current node. |
  |  name   |  string   | Node name will be displayed on the site view. |
  | horizontal (optional) | boolean | Value used to change menu orientation. |
  | isHidden (optional) | boolean | Place this attribute as "true" to hide parent node for children. |
  | children (optional) | array[] | Define array of children in that attribute. |
  | data (optional) | any | Place inside of this attribute any data. |
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
