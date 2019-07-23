import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarkdownComponent } from '../components/markdown'
export * from '../components/markdown'

@NgModule({
  declarations: [MarkdownComponent],
  exports: [MarkdownComponent],
  imports: [CommonModule]
})
export class MarkdownModule {}
