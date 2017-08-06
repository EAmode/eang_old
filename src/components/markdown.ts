import { Component, OnInit, Output, EventEmitter, Input, TemplateRef, ContentChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'ea-markdown',
  template: `
<!-- MQ(S) flex-row-holder -->
<div class="ea-card card-full md-flex-column-holder" style="min-height: 300px;">
    <!-- MQ(S) .card-full { order: 1 } -->
  <div *ngIf="editing" class="md-card-w">
    <div class="ea-card-header">
      <h3>EA Markdown Editor</h3>
      <div>
        <button md-menu-item *ngIf="editing" class="flex-row-holder" (click)="save()"> <img src="../assets/save.svg" alt="save"></button>
      </div>
    </div>
    <div class="flex-column-holder hundo">
      <textarea name="textarea" [(ngModel)]="changedContent"></textarea>
    </div>
  </div>
  <!-- MQ(S)  md-editor { width: 100% } {overflow-x: scroll} -->
  <div class="md-editor card-full">
    <div class="textera-position">
      <div class="ea-card-header">
        <div class="title">
          <h3>{{model.node.name}}</h3>
        </div>
        <div>
          <button md-icon-button [mdMenuTriggerFor]="menu">
          <md-icon>more_vert</md-icon>
         </button>
          <md-menu #menu="mdMenu">
              <button md-menu-item *ngIf="!editing" (click)="edit()"> <div class="logo-edit"></div> Edit </button>
              <button md-menu-item (click)="edit()"> <i class="material-icons">open_in_new</i> Open </button>

          </md-menu>
        </div>
      </div>
      <div class="md-content" [innerHTML]="renderedModel"></div>
    </div>
  </div>
</div>`
})
export class MarkdownComponent implements OnInit {
  private md = new MarkdownIt({ html: true })

  @Input() model

  renderedModel
  changedContent: string
  editing = false

  constructor(private mode: ModeService) { }

  ngDoCheck() {
    this.render()
  }

  edit() {
    this.editing = true
    this.changedContent = this.model.node.content
  }

  save() {
    this.editing = false
    this.model.node.content = this.changedContent
    this.mode.objectModify(this.model.node).subscribe(
      x => {
        console.log(x)
      },
      error => {
        console.log(error)
        //this.errorMessage = error.toString()
      })
  }

  private render() {
    if (this.editing && this.changedContent) {
      this.renderedModel = this.md.render(this.changedContent)
    } else {
      if (this.model && this.model.node.content) {
        this.renderedModel = this.md.render(this.model.node.content)
        //this.renderedModel = new String(this.model.object.content)
      }
    }
  }
}
