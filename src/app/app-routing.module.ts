import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ReactiveComponent } from './feature/reactive/reactive.component'
import { ThemingComponent } from './feature/theming/theming.component'
import { LayoutComponent } from './feature/layout/layout.component'

const routes: Routes = [
  { path: '', redirectTo: '/reactive', pathMatch: 'full' },
  { path: 'reactive', component: ReactiveComponent},
  { path: 'theming', component: ThemingComponent},
  { path: 'layout', component: LayoutComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
