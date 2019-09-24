import { Component, OnInit, Renderer2 } from '@angular/core'
import { MarkdownComponent } from '@eamode/eang'
import { timer, interval } from 'rxjs'
import { CopyPasteService } from 'src/app/services/copy-paste.service'

class TableItem {
  constructor(public technology: string, public experience: string) {}
}

@Component({
  selector: 'eangio-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public showSuccessfullyCopied = false
  public selectedText
  tableData = [
    new TableItem('C++', '5 years'),
    new TableItem('Pascal', '10 years'),
    new TableItem('Assembler', '15 years')
  ]

  constructor(
    public renderer2: Renderer2,
    public copyPasteService: CopyPasteService
  ) {}

  onRowSelect(row: HTMLElement) {
    if (row.getAttribute('selected')) {
      this.renderer2.removeAttribute(row, 'selected')
    } else {
      this.renderer2.setAttribute(row, 'selected', 'true')
    }
  }

  showInfoAboutSuccessfullyCopy() {
    this.copyPasteService.showSuccessfullyCopied.next(true)
    timer(2000).subscribe(() => {
      this.copyPasteService.showSuccessfullyCopied.next(false)
    })
  }

  selectableTable = `
  ~~~html
  <table class="ea-table">
  <caption>
    Program languages experience
  </caption>
  <thead>
    <tr>
      <th>Type</th>
      <th>Experience</th>
    </tr>
  </thead>
  <tbody>
  <tr *ngFor="let i of tableData"
  #row (click)="onRowSelect(row)">
      <td>{{ i.technology }}</td>
      <td>{{ i.experience }}</td>
    </tr>
  </tbody>
</table>
  ~~~
  `

  tableOnRowSelect = `
  ~~~ts
  import { Renderer2 } from '@angular/core'
  ...
  constructor(public renderer2: Renderer2) {}
  ...
  onRowSelect(row: HTMLElement) {
    if (row.getAttribute('active')) {
      this.renderer2.removeAttribute(row, 'active')
    } else {
      this.renderer2.setAttribute(row, 'active', 'true')
    }
  }
  ~~~
  `

  stripedTable = `
  ~~~html
  <table class="ea-table">
  <caption>Program languages experience</caption>
      <thead>
        <tr>
          <th>Type</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody striped>
      <tr>
        <td>C++</td>
        <td>5 years</td>
      </tr>
      <tr>
        <td>Pascal</td>
        <td>10 Years</td>
      </tr>
      <tr>
        <td>Assembler</td>
        <td>15 years</td>
      </tr>
      </tbody>
    </table>
  ~~~
  `

  hoverTable = `
  ~~~html
  <table class="ea-table">
  <caption>Program languages experience</caption>
      <thead>
        <tr>
          <th>Type</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody table-hover>
      <tr>
          <td>C++</td>
          <td>5 years</td>
      </tr>
      <tr>
          <td>Pascal</td>
          <td>10 Years</td>
      </tr>
      <tr>
        <td>Assembler</td>
        <td>15 years</td>
      </tr>
      </tbody>
    </table>
  ~~~
  `

  stripedNHoveredNSelectableTable = `
  ~~~html
  <table class="ea-table">
  <caption>
    Table 1. Programming languages experience
  </caption>
  <thead>
    <tr>
      <th>Type</th>
      <th>Experience</th>
    </tr>
  </thead>
  <tbody striped table-hover>
    <tr *ngFor="let i of tableData" #row (click)="onRowSelect(row)">
      <td>{{ i.technology }}</td>
      <td>{{ i.experience }}</td>
    </tr>
  </tbody>
</table>
  ~~~
  `

  textDirectionTable = `
  ~~~html
  <table class="ea-table">
  <caption>Program languages experience</caption>
  <thead>
    <tr>
      <th text-direction="right">Type</th>
      <th text-direction="left">Experience</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td text-direction="right">C++</td>
      <td text-direction="left">5 years</td>
    </tr>
    <tr>
      <td text-direction="right">Pascal</td>
      <td text-direction="left">10 Years</td>
    </tr>
    <tr>
      <td text-direction="right">Assembler</td>
      <td text-direction="left">15 years</td>
    </tr>
  </tbody>
</table>
  ~~~
  `

  table_css_variables = `
  |  CSS Variables   | Type  | Default |
  |---|---|----|
  |  \`--ea-table-thead-th-color\`  |  Sets the table header text color | rgba(0, 0, 0, 1) |
  |  \`--ea-table-thead-background\`  |  Sets the background color for the table header | rgba(255, 255, 255, 1) |
  |  \`--ea-table-thead-border-color\`   |  Sets the table header border color | rgba(0, 0, 0, 0.5) |
  | \` --ea-table-thead-text-align \`| Align text in the table header | \`center\` |
  |---|---|----|
  | \` --ea-table-tbody-text-align\` | Align text in the row | \`center\` |
  |---|---|----|
  | \`--ea-table-border-bottom-width\` | Sets the widht of the border bottom | 0.3em |
  | \`--ea-table-border-bottom-width\` | Sets the widht of the border bottom | rgba(148, 148, 148, 0.616)|
  |---|---|----|
  | \`--ea-table-padding-top-bottom\` | Sets the top and bottom padding | .7em|
  | \`--ea-table-padding-right-left\` | Sets the right and left padding | .7em|
  |---|---|----|
  | \`--ea-table-tr-hover-cursor\` | Sets the hover cursor | pointer|
  | \`--ea-table-tr-hover-background\` | Sets the hover background color | rgba(83, 245, 8, 0.5)|
  |---|---|----|
  | \`--ea-table-row-selected-background\` | Sets the selected background color | rgba(179, 194, 230, 1)|
  `

  ngOnInit() {}
}
