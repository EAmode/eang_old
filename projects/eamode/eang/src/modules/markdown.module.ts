import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarkdownComponent, MdComponent } from '../components/markdown'
export * from '../components/markdown'

@NgModule({
  declarations: [MarkdownComponent, MdComponent],
  exports: [MarkdownComponent, MdComponent],
  imports: [CommonModule]
})
export class MarkdownModule {}
