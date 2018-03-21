import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'ea-panel',
  template: `<div><ng-content></ng-content></div>`,
  styles: ['div {border: 1px solid black;background-color: red;}']
})
export class PanelComponent implements OnInit {
  @Input() state: Observable<string>
  stateName: string

  constructor() {
    const t = Array.of(1, 2, 3)
    console.log(t)
  }

  ngOnInit(): void {
    this.state.subscribe(s => {
      this.stateName = s
    })
    console.log(this.stateName)
  }
}
