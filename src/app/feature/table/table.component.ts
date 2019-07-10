import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core'

class TableItem {
  constructor(public technology: string, public experience: string) {}
}

@Component({
  selector: 'eangio-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableData = [
    new TableItem('C++', '5 years'),
    new TableItem('Pascal', '10 years'),
    new TableItem('Assembler', '15 years')
  ]

  constructor(public renderer2: Renderer2) {}

  onRowSelect(row: HTMLElement) {
    if (row.getAttribute('active')) {
      this.renderer2.removeAttribute(row, 'active')
    } else {
      this.renderer2.setAttribute(row, 'active', 'true')
    }
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
    <tr eangioSelectableTable
    *ngFor="let i of tableData">
      <td>{{ i.technology }}</td>
      <td>{{ i.experience }}</td>
    </tr>
  </tbody>
</table>
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

  stripedNHoveredTable = `
  ~~~html
  <table class="ea-table">
  <caption>Program languages experience</caption>
      <thead>
        <tr>
          <th>Type</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody striped table-hover>
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
  <tbody striped table-hover>
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
  |  \`--ea-table-thead-th-bgcolor\`  |  Sets the background color for the table header | rgba(255, 255, 255, 1) |
  |  \`--ea-table-thead-th-border-color\`   |  Sets the table header border color | rgba(0, 0, 0, 0.5) |
  | \` --ea-table-thead-th-text-align \`| Align text in the table header | \`center\` |
  |---|---|----|
  | \` --ea-table-tbody-text-align\` | Align text in the row | \`center\` |
  |---|---|----|
  | \`--ea-table-border-bottom-width\` | Sets the widht of the border bottom | 0.2em |
  | \`--ea-table-border-bottom-width\` | Sets the widht of the border bottom | rgba(148, 148, 148, 0.616)|
  |---|---|----|
  | \`--ea-table-padding-top-bottom\` | Sets the top and bottom padding | 10px|
  | \`--ea-table-padding-right-left\` | Sets the right and left padding | 10px|
  |---|---|----|
  | \`--ea-table-tr-hover-cursor\` | Sets the hover cursor | pointer|
  | \`--ea-table-tr-hover-bgcolor\` | Sets the hover background color | rgba(83, 245, 8, 0.5)|
  |---|---|----|
  | \`--ea-table-row-selected-bgcolor\` | Sets the selected background color | rgba(179, 194, 230, 1)|
  `

  ngOnInit() {}
}
