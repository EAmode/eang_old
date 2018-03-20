import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'ea-menu',
  template: `
    <ea-menu-item [item]="item" [itemTemplate]="itemTemplate"></ea-menu-item>
  `
})
export class MenuComponent {
  @Input() item: any
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>
}

@Component({
  selector: 'ea-menu-item',
  template: `
    <ng-template #defaultTemplate let-item>{{item.name}}</ng-template>
    <ng-template [ngTemplateOutlet]="itemTemplate || defaultTemplate" [ngOutletContext]="{ $implicit: item }"></ng-template>
    <ea-menu-item *ngFor="let child of item.children" [item]="child" [itemTemplate]="itemTemplate"></ea-menu-item>
  `
})
export class MenuItemComponent {
  @Input() item: any
  @Input() itemTemplate: TemplateRef<any>
  private defaultTemplate: TemplateRef<any>
}

// @Component({
//   selector: 'mode-menu-item',
//   template: `
//     <b>{{item.name}}</b>
//   `
// })
// export class ModeMenuItemComponent {
//   @Input() item: any
//   @Input() itemTemplate: TemplateRef<any>
//   private defaultTemplate: TemplateRef<any>
// }

// <ng-template #defaultTemplate let-item>{{item.name}}</ng-template>
// <ng-template [ngTemplateOutlet]="itemTemplate || defaultTemplate" [ngOutletContext]="{ $implicit: item }"></ng-template>
// <ea-menu-item *ngFor="let child of item.children" [item]="child"></ea-menu-item>
