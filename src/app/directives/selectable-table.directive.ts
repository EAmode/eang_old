import { Directive, HostListener, ElementRef } from '@angular/core'

@Directive({
  selector: '[eangioSelectableTable]'
})
export class SelectableTableDirective {
  @HostListener('click') onClick() {
    if (this.el.nativeElement.getAttribute('active')) {
      this.el.nativeElement.removeAttribute('active')
    } else {
      this.el.nativeElement.setAttribute('active', 'true')
    }
  }

  constructor(public el: ElementRef) {}
}
