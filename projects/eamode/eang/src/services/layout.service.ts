import { Injectable } from '@angular/core'
import { BehaviorSubject, merge } from 'rxjs'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { filter, map } from 'rxjs/operators'

export class EaLayout {
  config = {
    drawer: { state: 'maximized' }
  }

  private readonly configSubject = new BehaviorSubject<any>(this.config)
  config$ = this.configSubject.asObservable()
  drawerState$ = this.config$.pipe(map(x => x.drawer.state))

  openDrawer() {
    if (this.config.drawer.state !== 'maximized') {
      this.config.drawer.state = 'maximi'
      this.configSubject.next(this.config)
    }
  }

  closeDrawer() {
    if (this.config.drawer.state !== 'closed') {
      this.config.drawer.state = 'closed'
      this.configSubject.next(this.config)
    }
  }
}

@Injectable()
export class LayoutService {
  screenSize: String
  isDrawerOverlay = false
  drawerState$ = new BehaviorSubject<string>('maximized')
  breakpoint$ = merge(
    this.bm.observe(Breakpoints.XSmall).pipe(
      filter(s => s.matches),
      map(_ => 'XSmall')
    ),
    this.bm.observe(Breakpoints.Small).pipe(
      filter(s => s.matches),
      map(_ => 'Small')
    ),
    this.bm.observe(Breakpoints.Large).pipe(
      filter(s => s.matches),
      map(_ => 'Large')
    ),
    this.bm.observe(Breakpoints.XLarge).pipe(
      filter(s => s.matches),
      map(_ => 'XLarge')
    )
    // this.bm.observe(Breakpoints.Handset).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'Handset')
    // ),
    // this.bm.observe(Breakpoints.Tablet).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'Tablet')
    // ),
    // this.bm.observe(Breakpoints.Web).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'Web')
    // ),
    // this.bm.observe(Breakpoints.HandsetPortrait).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'HandsetPortrait')
    // ),
    // this.bm.observe(Breakpoints.TabletPortrait).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'TabletPortrait')
    // ),
    // this.bm.observe(Breakpoints.WebPortrait).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'WebPortrait')
    // ),
    // this.bm.observe(Breakpoints.HandsetLandscape).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'HandsetLandscape')
    // ),
    // this.bm.observe(Breakpoints.TabletLandscape).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'TabletLandscape')
    // ),
    // this.bm.observe(Breakpoints.WebLandscape).pipe(
    //   filter(s => s.matches),
    //   map(_ => 'WebLandscape')
    // )
  )
  constructor(public bm: BreakpointObserver) {}
}
