import { Injectable, Optional } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export enum DrawerState {
  uninitialized = 0,
  closed = 1,
  minimized = 2,
  maximized = 3
}

@Injectable()
export class LayoutService {
  drawerState$ = new BehaviorSubject<DrawerState>(DrawerState.uninitialized)
  constructor() {}
}
