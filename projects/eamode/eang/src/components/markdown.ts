import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
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

@Component({
  selector: 'ea-markdown',
  template: `
    <span class="ea-markdown-content" [innerHTML]="compiledMarkdown"></span>
  `
})
export class MarkdownComponent implements OnChanges {
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
          return Prism.highlight(str, Prism.languages[lang], lang)
          // return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      return '' // use external default escaping
    }
  })

  @Input() doc: string
  compiledMarkdown = ''

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.compiledMarkdown = this.markdownIt.render(
      String(changes.doc.currentValue)
    )
  }
}
