import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

@Component({
  selector: 'demo-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  context = Observable.of({ obj: 1 })
  mdDoc = Observable.of('# Markdown ${obj +2}')
  constructor() { }

  ngOnInit() {
  }

}
