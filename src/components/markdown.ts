import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import MarkdownIt from 'markdown-it'
import * as _ from 'lodash'

@Component({
  selector: 'ea-markdown',
  template: `
    <div class="md-content" [innerHTML]="compiledMarkdown | async"></div>
  `
})
export class MarkdownComponent implements OnInit {
  markdownIt = new MarkdownIt({ html: true })

  @Input() doc: Observable<string>
  @Input() ctx: Observable<any>
  compiledMarkdown: Observable<string>

  ngOnInit(): void {
    this.compiledMarkdown = Observable.combineLatest(
      this.doc,
      this.ctx,
      (doc, ctx) => ({ doc, ctx })
    )
      .debounceTime(400)
      .distinctUntilChanged()
      .map(change => {
        const compiled = _.template(change.doc)
        return this.markdownIt.render(compiled(change.ctx))
      })
  }
}
