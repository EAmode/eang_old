import { Component, OnInit, Output, EventEmitter, Input, TemplateRef, ContentChild, OnDestroy } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import * as MarkdownIt from 'markdown-it'
import * as _ from 'lodash'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'ea-markdown',
  template: `
    <div class="md-content" [innerHTML]="compiledMarkdown"></div>
  `
})
export class MarkdownComponent implements OnDestroy {
  markdownIt = new MarkdownIt({ html: true })

  @Input() doc: Observable<string>
  @Input() ctx: Observable<any>
  subscription: Subscription

  compiledMarkdown: string

  constructor() {
    this.subscription = Observable
      .combineLatest(this.doc, this.ctx, (doc, ctx) => ({ doc, ctx }))
      .subscribe(change => {
        const compiled = _.template(change.doc)
        this.markdownIt.render(compiled(change.ctx))
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
