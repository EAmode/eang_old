import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

export interface MenuTreeItem {
  id?: any
  name: string
  icon?: string
  iconStyle?: string
  horizontal?: boolean
  isHidden?: boolean
  isActive?: boolean
  isOpen?: boolean
  parent?: MenuTreeItem
  children?: MenuTreeItem[]
  data?: any
}
@Component({
  selector: 'ea-menu',
  template: `
  <div class="node" *ngIf="!node.isHidden"
    [class.has-children]="node.children?.length > 0"
    [style.padding-left]="depth * 15 + 'px'"
    [attr.active]="node.isActive ? '' : null">
      <ng-container *ngIf="node.icon">
        <button *ngIf="node.children?.length > 0 else noChildren" (click)="onToggle()" class="node-toggle" custom>
          <span icon class="{{node.icon}} {{node.iconStyle}}"></span>
        </button>
        <ng-template #noChildren>
          <button class="node-toggle" custom disabled>
            <span icon class="{{node.icon}} {{node.iconStyle}}"></span>
          </button>
        </ng-template>
      </ng-container>
      <button *ngIf="!node.icon && node.children?.length > 0" (click)="onToggle()" class="node-toggle" custom>
          <span icon chevron-down *ngIf="node.isOpen" role="icon" style="margin: 0">
          </span>
          <span icon chevron-right *ngIf="!node.isOpen" role="icon" style="margin: 0">
          </span>
      </button>
      <span (click)="onActivate()" class="name">
        {{node.name}}
      </span>
    <aside>
      <ng-container *ngIf="controlPanelTemplate"
        [ngTemplateOutlet]="controlPanelTemplate"
        [ngTemplateOutletContext]="{node: node}">
      </ng-container>
    </aside>
</div>
<div *ngIf="node.children?.length > 0 && (node.isOpen || node.isHidden)" class="ea-tree-children" [class.horizontal]="!!node.horizontal">
  <ea-menu
    *ngFor="let child of node.children trackBy: track.bind(node)"
    [node]="child"
    [depth]="depth + 1"
    [toggleEvents]="toggleEvents"
    [activateEvents]="activateEvents"
    [controlPanelTemplate]="controlPanelTemplate"></ea-menu>
</div>`,
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  @Input()
  node
  @Input()
  depth = 0
  @Input()
  controlPanelTemplate
  @Input()
  toggleEvents: EventEmitter<MenuTreeItem>
  @Input()
  activateEvents: EventEmitter<MenuTreeItem>

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    if (this.node.children && this.node.children.length > 0) {
      this.node.isOpen = !this.node.isOpen
    }
    if (this.toggleEvents) {
      this.toggleEvents.emit(this.node)
    }
  }

  getTreeRoot(item: MenuTreeItem) {
    return item.parent ? this.getTreeRoot(item.parent) : item
  }

  deactivateChildren(item: MenuTreeItem) {
    item.isActive = false
    if (item.children) {
      item.children.forEach(child => {
        this.deactivateChildren(child)
      })
    }
  }

  onActivate() {
    this.onToggle()
    const root = this.getTreeRoot(this.node)
    this.deactivateChildren(root)
    this.node.isActive = true

    if (this.activateEvents) {
      this.activateEvents.emit(this.node)
    }
  }

  track(index, currentNode) {
    currentNode.parent = this
  }
}
