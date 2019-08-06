import { Component, Input } from '@angular/core'
import { CopyPasteService } from 'src/app/services/copy-paste.service'
import { MarkdownComponent } from '@eamode/eang'

@Component({
  selector: 'eangio-copy-code',
  templateUrl: './copy-code.component.html',
  styles: [
    `
      div {
        display: grid;
      }

      span {
        cursor: pointer;
      }

      .copy-clipboard {
        display: flex;
        justify-content: space-around;
        margin: unset;
      }

      small {
        text-align: center;
        color: var(--ea-color-accent-1);
      }
    `
  ]
})
export class CopyCodeComponent {
  @Input() templateToCopy: MarkdownComponent
  constructor(public copyPasteService: CopyPasteService) {}
}
