import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'demo-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {

  tree = {
    name: 'root',
    children: [
      {
        name: 'First sub menu item',
        children: [
          {
            name: 'Second sub menu item'
          }
        ]
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
