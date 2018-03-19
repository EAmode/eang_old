import { Component } from '@angular/core'

@Component({
  selector: 'ea-panel',
  template: `
    <div>{{title}}<ng-content></ng-content></div>
  `,
  styles: ['div {border: 1px solid black;}']
})
export class PanelComponent {
  title = 'test'
  constructor() {
    const t = Array.of(1, 2, 3)
    console.log(t)
    console.log(this.title)
  }
}
