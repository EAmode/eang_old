import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CopyCodeService {
  constructor() {}

  copyCode(code) {
    const el = document.createElement('textarea')
    el.value = code
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
}
