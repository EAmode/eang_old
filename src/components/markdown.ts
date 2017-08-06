import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import * as MarkdownIt from 'markdown-it'
import * as _ from 'lodash'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'ea-markdown',
  template: `
    <div class="md-content" [innerHTML]="compiledMarkdown"></div>
  `
})
export class MarkdownComponent implements OnDestroy, OnInit {
  markdownIt = new MarkdownIt({ html: true })

  @Input() doc = Observable.of('')
  @Input() ctx = Observable.of({})
  subscription: Subscription
  compiledMarkdown: string

  ngOnInit(): void {
    this.subscription = Observable
      .combineLatest(this.doc, this.ctx, (doc, ctx) => ({ doc, ctx }))
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(change => {
        const compiled = _.template(change.doc)
        this.compiledMarkdown = this.markdownIt.render(compiled(change.ctx))
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
