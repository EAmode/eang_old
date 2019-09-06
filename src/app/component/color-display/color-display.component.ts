import { Component, OnInit, Input, ElementRef } from '@angular/core'

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eangio-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.scss']
})
export class ColorDisplayComponent implements OnInit {
  @Input() color: string
  colorValue: string

  constructor(public element: ElementRef) {}

  ngOnInit() {
    this.colorValue = getComputedStyle(
      this.element.nativeElement
    ).getPropertyValue(this.color)
  }

  changeBackground(): any {
    return { background: `var(${this.color})` }
  }
}
