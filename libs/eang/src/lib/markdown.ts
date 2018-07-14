import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ContentChild,
  Directive,
  AfterContentInit,
  ElementRef,
  ViewChild,
  ContentChildren,
  QueryList
} from '@angular/core'
import { of, Observable, combineLatest } from 'rxjs'
import MarkdownIt from 'markdown-it'
import * as _ from 'lodash'
import { map } from 'rxjs/operators'

@Component({ selector: 'ea-md', template: `<ng-content></ng-content>` })
export class MdComponent implements OnInit, AfterContentInit {
  constructor(public elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.elementRef.nativeElement)
  }
  ngAfterContentInit() {}
}

@Component({
  selector: 'ea-markdown',
  template: `
    <div class="md-content" [innerHTML]="compiledMarkdown | async"></div>
    <ng-content #content></ng-content>
  `
})
export class MarkdownComponent implements OnInit, AfterContentInit {
  @ContentChildren(MdComponent) contentChild: ElementRef
  @ContentChildren(MdComponent) contentChildren: QueryList<ElementRef>
  @ViewChild('content') content: ElementRef

  markdownIt = new MarkdownIt({ html: true })

  @Input() doc: Observable<string>
  @Input() ctx = of(null)
  compiledMarkdown: Observable<string>

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log('native:', this.elementRef.nativeElement)

    if (typeof this.doc === 'string') {
      this.doc = of(this.doc)
    }

    this.compiledMarkdown = combineLatest(this.doc, this.ctx, (doc, ctx) => ({
      doc,
      ctx
    })).pipe(
      map(change => {
        const compiled = _.template(change.doc)
        return this.markdownIt.render(compiled(change.ctx))
      })
    )
  }

  ngAfterContentInit() {
    console.log('content after:', this.content)
    console.log(this.contentChild)

    console.log('children:', this.contentChildren)

    this.contentChildren.map(c => {
      console.log(c.nativeElement)
    })
  }
}
