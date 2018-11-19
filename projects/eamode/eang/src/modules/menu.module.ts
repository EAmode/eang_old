import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from '../components/menu'
export * from '../components/menu'

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [CommonModule]
})
export class MenuModule {}
