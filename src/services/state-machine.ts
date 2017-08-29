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
  constructor(public states: StateMap, public transitionDefs, public initialState: State) {
    for (const key in states) {
      if (states.hasOwnProperty(key)) {
        const s = states[key]
        if (s.name === undefined) {
          s.name = _.startCase(key)
        }
    }
    }
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

  setData(data) {

  }
}

export interface State {
  name: string,
  count: number,
  order: number,
  valid: boolean,
  data?: any
}

export interface StateMap {
  [index: string]: State
  [index: number]: State
}

export interface Transition {
  name: string,
  failingGuards: Array<Guard>
  fromState: State,
  toState: State,
  transitionDef: TransitionDefinition
}

export interface TransitionDefinition {
  name: string,
  order: number,
  valid: boolean,
  data?: any,
  from(currentState: State): Array<State>,
  to(currentState: State): Array<State>,
}

export interface Guard {
  (allStates: string,
    to: number,
    order: number,
    valid: boolean,
    data?: any)
}

