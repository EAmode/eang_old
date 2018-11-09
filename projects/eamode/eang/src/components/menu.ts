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
  depth?: number
  isOpen?: boolean
  parent?: MenuTreeItem
  children?: MenuTreeItem[]
  data?: any
}
@Component({
  selector: 'ea-menu',
  template: `
  <div class="node"
    [class.has-children]="node.children?.length > 0"
    [style.padding-left]="node.depth * 15 + 'px'"
    [attr.active]="node.isActive ? '' : null">
      <button *ngIf="node.children?.length > 0" (click)="onToggle()" class="node-toggle" custom>
          <span class="chevron-down" *ngIf="node.isOpen" role="icon"
            style="--ea-button-icon: var(--ea-icon-chevron-down); --ea-icon-margin: 0;" icon>
          </span>
          <span
            class="chevron-right" *ngIf="!node.isOpen" role="icon"
              style="--ea-button-icon: var(--ea-icon-chevron-right); --ea-icon-margin: 0;" icon>
            </span>
      </button>
      <div>
        <div (click)="onActivate()" class="name">
          {{node.name}}
        </div>
      </div>
    <aside>
      <ng-container *ngIf="controlPanelTemplate"
        [ngTemplateOutlet]="controlPanelTemplate"
        [ngTemplateOutletContext]="{node: node}">
      </ng-container>
    </aside>
</div>
<div *ngIf="node.children?.length > 0 && node.isOpen" class="ea-tree-children">
  <ea-menu
    *ngFor="let child of node.children"
    [node]="child"
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
  controlPanelTemplate
  @Input()
  toggleEvents: EventEmitter<MenuTreeItem>
  @Input()
  activateEvents: EventEmitter<MenuTreeItem>

  constructor() {
    console.log(this)
  }
  ngOnInit(): void {
    console.log(this)
  }
  onToggle() {
    if (this.node.children.length > 0) {
      this.node.isOpen = !this.node.isOpen
    }
    if (this.toggleEvents) {
      this.toggleEvents.emit(this.node)
    }
  }

  onActivate() {
    this.node.isActive = true
    if (this.activateEvents) {
      this.activateEvents.emit(this.node)
    }
  }
}
