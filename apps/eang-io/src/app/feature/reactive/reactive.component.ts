import { Component, OnInit } from '@angular/core'
import { FormControl, ReactiveFormsModule, FormGroup, NgForm } from '@angular/forms';
import { BehaviorSubject, timer } from 'rxjs'
import { map, switchMap, share } from 'rxjs/operators'
import { MdcRadioChange } from '@angular-mdc/web';

@Component({
  selector: 'ea-feature-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent {
  panelState = new BehaviorSubject<string>('maximized')
  orientations = ['top', 'right', 'bottom', 'left']
  panelOrientation = timer(0, 1500).pipe(
    map(i => this.orientations[i % this.orientations.length]),
    share()
  )

  md = `
  *reactive-panel.component.html*
~~~html
<ea-panel [state]="panelState" [orientation]="panelOrientation">panel ({{panelOrientation | async}})</ea-panel>
~~~
  *reactive-panel.component.ts*
  ~~~ts
  @Component({
    selector: 'reactive-panel',
    templateUrl: './reactive-panel.component.html'
  })
  export class ReactivePanelComponent {
    panelState = new BehaviorSubject<string>('maximized')
    orientations = ['top', 'right', 'bottom', 'left']
    panelOrientation = timer(0, 1500).pipe(
      map(i => this.orientations[i % this.orientations.length]),
      share()
    )
  }
  ~~~
  `
  favoriteFruit: string;

  onChange(evt: MdcRadioChange): void {
    console.log(evt.value)
    this.favoriteFruit = evt.value;
  }
}
