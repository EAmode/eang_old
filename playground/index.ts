/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component, OnInit } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { PanelModule } from 'eang'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  selector: 'pg-root',
  template: `
  <div class="mode">
  <ea-panel state="maximized" [orientation]="toolbarOrientation" style=" --ea-panel-top-maximized-height: 24rem;"></ea-panel>
  <ea-panel [state]="toolbarState" [orientation]="toolbarOrientation" style=" --ea-panel-top-minimized-height: 30px;">
    <div class="left">
      <p>Test</p>
      <p>Test</p>
    </div>
  </ea-panel>
  <button (click)="changeState('minimized')">minimized</button>
  <button (click)="changeState('maximized')">maximized</button>
  <button (click)="changeState('closed')">closed</button>
  <br>
  <button (click)="changeOrientation('top')">top</button>
  <button (click)="changeOrientation('right')">right</button>
  <button (click)="changeOrientation('bottom')">bottom</button>
  <button (click)="changeOrientation('left')">left</button>
  </div>`
})
class AppComponent implements OnInit {
  public toolbarState = new BehaviorSubject('maximized')
  public toolbarOrientation = new BehaviorSubject('top')

  ngOnInit(): void {
    this.toolbarState = new BehaviorSubject('maximized')
  }
  changeState(state: string) {
    console.log(state)
    this.toolbarState.next(state)
  }
  changeOrientation(orientation: string) {
    console.log(orientation)
    this.toolbarOrientation.next(orientation)
  }
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, PanelModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
