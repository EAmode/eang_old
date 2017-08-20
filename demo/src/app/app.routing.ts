import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MarkdownComponent } from './markdown/markdown.component'
import { MenuTreeComponent } from './menu-tree/menu-tree.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { LandingComponent } from './landing/landing.component'
import { DocumentationComponent } from './documentation/documentation.component'

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'documentation', component: DocumentationComponent, children: [
      { path: 'markdown', component: MarkdownComponent },
      { path: 'menu-tree', component: MenuTreeComponent },
      { path: 'autocomplete', component: AutocompleteComponent }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
