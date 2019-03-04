import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
  AfterContentInit
} from '@angular/core'
import { Subject } from 'rxjs'
import { EangElement } from '../core'

@Component({
  selector: 'ea-menu',
  template: `
    <div
      node
      [attr.has-children]="node.hasChildren"
      [attr.hidden]="node.isHidden ? '' : null"
      [attr.active]="node.isActive ? '' : null"
      [attr.toggle]="node.toggleRight ? '' : null"
      [attr.dropdown]="node.dropdown"
    >
      <div
        *ngIf="node.hasChildren"
        toggle-area
        (click)="onToggle()"
        [attr.dropdownToggle]="node.dropdown"
        [style.min-width]="node.dropdown ? null : depth * 0.95 + 'em'"
      >
        <ng-container
          *ngIf="toggleAreaTemplate; else defaultToggleArea"
          [ngTemplateOutlet]="toggleAreaTemplate"
          [ngTemplateOutletContext]="{ node: node }"
        >
        </ng-container>
        <ng-template #defaultToggleArea>
          <span icon chevron-down negative *ngIf="node.isOpen"> </span>
          <span
            icon
            chevron-left
            negative
            *ngIf="!node.isOpen && node.toggleRight"
          >
          </span>
          <span
            icon
            chevron-right
            negative
            *ngIf="!node.isOpen && !node.toggleRight"
          >
          </span>
        </ng-template>
      </div>

      <div
        (click)="onActivate()"
        name-area
        [attr.toggle]="node.toggleRight ? '' : null"
        [style.padding-left]="node.hasChildren ? 0 : depth * 0.95 + 'em'"
      >
        <ng-container
          *ngIf="nameAreaTemplate; else defaultNameArea"
          [ngTemplateOutlet]="nameAreaTemplate"
          [ngTemplateOutletContext]="{ node: node }"
        >
        </ng-container>

        <ng-template #defaultNameArea>
          <ng-container *ngIf="node.icon">
            <span icon class="{{ node.icon }} {{ node.iconStyle }}"></span>
          </ng-container>
          {{ node.name }}
        </ng-template>
      </div>

      <aside>
        <ng-container
          *ngIf="optionAreaTemplate"
          [ngTemplateOutlet]="optionAreaTemplate"
          [ngTemplateOutletContext]="{ node: node }"
        >
        </ng-container>

        <button
          *ngIf="node.closeable"
          icon
          flat
          class="close"
          (click)="onClose()"
        >
          <span icon x negative></span>
        </button>
      </aside>
    </div>
    <div
      *ngIf="node.hasChildren && (node.isOpen || node.isHidden)"
      ea-tree-children
      [attr.horizontal]="node.horizontal"
      [attr.dropdown]="node.dropdown"
    >
      <ea-menu
        *ngFor="let child of node.children; trackBy: track.bind(node)"
        [node]="child"
        [depth]="depth + 1"
        [closeEvents]="closeEvents"
        [toggleEvents]="toggleEvents"
        [activateSubject]="activateSubject"
        [nameAreaTemplate]="nameAreaTemplate"
        [toggleAreaTemplate]="toggleAreaTemplate"
        [optionAreaTemplate]="optionAreaTemplate"
      ></ea-menu>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, AfterContentInit {
  @Input() node
  @Input() depth = 0
  @Input() nameAreaTemplate
  @Input() toggleAreaTemplate
  @Input() optionAreaTemplate
  @Input() closeEvents: EventEmitter<EangElement>
  @Input() toggleEvents: EventEmitter<EangElement>
  @Input() activateSubject: Subject<EangElement>

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.node.toggleRight && this.node.children) {
      this.node.children.forEach(everychild => {
        everychild.toggleRight = true
      })
    }

    this.node.hasChildren =
      this.node.children && this.node.children.length > 0 ? true : false
  }

  onClose() {
    this.node.isOpen = false
    this.node.isHidden = true
    if (this.closeEvents) {
      this.closeEvents.emit(this.node)
    }
  }

  onToggle() {
    if (this.node.children && this.node.children.length > 0) {
      this.node.isOpen = !this.node.isOpen
    }
    if (this.toggleEvents) {
      this.toggleEvents.emit(this.node)
    }
  }

  getTreeRoot(item: EangElement) {
    return item.parent ? this.getTreeRoot(item.parent) : item
  }

  deactivateChildren(item: EangElement) {
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

    if (this.activateSubject) {
      this.activateSubject.next(this.node)
    }
  }

  track(index, currentNode) {
    currentNode.parent = this
  }
}
