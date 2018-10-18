import { Injectable, Optional } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class LayoutService {
  drawerState$ = new BehaviorSubject<string>(null)
  constructor() {}
}
