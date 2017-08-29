import { Injectable, HostListener } from '@angular/core'
import { Location } from '@angular/common'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/observable/of'
import _ from 'lodash'

@Injectable()
export class StateMachineService {
  currentTransitions$: Subject<any>
  currentState$: Subject<any>
  currentState: any
  constructor(public states, public transitionDefs, public initialState) {
    this.currentState = initialState
    this.currentTransitions$ = new BehaviorSubject(this.currentTransitions())
    this.currentState$ = new BehaviorSubject(initialState)
  }

  transition(transitionDef, toState = null) {
    const newCurrentState = null
    if (this.currentState !== newCurrentState) {
      this.currentState = newCurrentState
      this.currentState$.next(newCurrentState)
    }
  }

  currentTransitions() {

  }

  currentTransitionsFor(transitionDef) {

  }

  update() {

  }

}
