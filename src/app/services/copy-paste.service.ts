import { Injectable } from '@angular/core'
import { MarkdownComponent } from '@eamode/eang'
import { BehaviorSubject, timer } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CopyPasteService {
  public showSuccessfullyCopied = new BehaviorSubject<boolean>(false)

  constructor() {}

  copyCode(code) {
    this.showSuccessfullyCopied.next(true)
    timer(2000).subscribe(() => {
      this.showSuccessfullyCopied.next(false)
    })

    const el = document.createElement('textarea')
    code = code.replace('~~~html', '')
    code = code.replace('~~~css', '')
    code = code.replace('~~~scss', '')
    code = code.replace('~~~ts', '')
    code = code.replace('~~~', '')
    el.value = code
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
}
