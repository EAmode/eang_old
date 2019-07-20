import { Component, OnInit, Input, AfterViewInit } from '@angular/core'

@Component({
  selector: 'eangio-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.scss']
})
export class ColorDisplayComponent implements OnInit, AfterViewInit {
  @Input() color: string
  colorValue: string

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.colorValue = document.documentElement.style.getPropertyValue(
      this.color
    )
  }

  changeBackground(): any {
    return { background: `var(${this.color})` }
  }
}
