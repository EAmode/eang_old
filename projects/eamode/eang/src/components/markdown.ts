import {
  Component,
  Input,
  OnInit,
  AfterContentInit,
  ElementRef,
  ViewChild
} from '@angular/core'
import { of, Observable, combineLatest } from 'rxjs'
import * as MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
// import 'prismjs/plugins/toolbar/prism-toolbar';
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-scss'
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
    <span class="ea-markdown-content" [innerHTML]="compiledMarkdown | async" #content>
      <ng-content></ng-content>
    </span>
  `
})
export class MarkdownComponent implements OnInit, AfterContentInit {
  @ViewChild('content') content: ElementRef

  markdownIt = new MarkdownIt({
    html: true, // Enable HTML tags in source
    xhtmlOut: false, // Use '/' to close single tags (<br />).
    // This is only for full CommonMark compatibility.
    breaks: true, // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-', // CSS language prefix for fenced blocks. Can be
    // useful for external highlighters.
    linkify: false, // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    typographer: true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
    highlight: function(str, lang) {
      // let hilighted = Prism.highlight(str, Prism.languages.javascript, 'javascript')
      if (lang) {
        try {
          return Prism.highlight(str, Prism.languages['lang'], lang)
          // return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      return '' // use external default escaping
    }
  })

  @Input() doc: Observable<string>
  @Input() ctx = of(null)
  compiledMarkdown: Observable<string>

  hasInnermarkdown = false

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log('native:', this.elementRef.nativeElement)
    console.log('content after:', this.content)

    if (this.content && this.content.nativeElement.innerHTML) {
      this.hasInnermarkdown = true
      console.log('inner text', this.content.nativeElement.innerHTML)
      this.doc = of(this.content.nativeElement.innerHTML)
      this.content.nativeElement.innerText = null
    } else if (typeof this.doc === 'string') {
      this.doc = of(this.doc)
    }

    this.compiledMarkdown = combineLatest(this.doc, this.ctx).pipe(
      map(([doc, ctx]) => {
        const compiled = _.template(doc)
        return this.markdownIt.render(compiled(ctx))
      })
    )
  }

  ngAfterContentInit() {}
}
