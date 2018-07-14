import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarkdownComponent } from './markdown'
export * from './markdown'

@NgModule({
  declarations: [MarkdownComponent],
  exports: [MarkdownComponent],
  imports: [CommonModule]
})
export class MarkdownModule {}
