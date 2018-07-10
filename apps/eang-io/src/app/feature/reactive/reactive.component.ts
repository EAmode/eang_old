import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, timer } from 'rxjs'
import { map, switchMap, share } from 'rxjs/operators'

@Component({
  selector: 'ea-feature-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  panelState = new BehaviorSubject<string>('maximized')
  orientations = ['top', 'right', 'bottom', 'left']
  panelOrientation = timer(0, 1500).pipe(
    map(i => this.orientations[i % this.orientations.length]),
    share()
  )
  constructor() {}

  ngOnInit() {}

}
