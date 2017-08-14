import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { Subject } from 'rxjs/Subject'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Component({
  selector: 'demo-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  context = new BehaviorSubject({ obj: 1 })
  mdDoc = Observable.of('# Markdown ${obj + 4}')
  constructor() { }

  ngOnInit() {
  }

}
