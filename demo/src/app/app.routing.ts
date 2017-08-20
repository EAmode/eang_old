import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MarkdownComponent } from './markdown/markdown.component'
import { MenuTreeComponent } from './menu-tree/menu-tree.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { LandingComponent } from './landing/landing.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent,
    children: []
  },
  {
    path: 'markdown',
    component: MarkdownComponent,
    children: []
  },
  {
    path: 'menu-tree',
    component: MenuTreeComponent,
    children: []
  },
  {
    path: 'autocomplete',
    component: AutocompleteComponent,
    children: []
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
