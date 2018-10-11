import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  layout = `
  ## Layout Module \`<ea-layout>\`

  The layout module consists of  \`<ea-layout>\`, \`<ea-toolbar>\`, \`<ea-main>\`, \`<ea-body>\` , \`<ea-drawer>\`,
  \`<ea-footer>\`, and the \`LayoutService\`.
  It allows to easily create a reactive web-app layout working across desktop and mobile.

  This is inspired by [Polymer's App Layout](https://www.polymer-project.org/3.0/toolbox/app-layout).

  Technologies to be used: CSS Grid, CSS Custom Properties, RX Observable.
  The work should be completed in the [\`layouts\`](https://github.com/EAmode/eang/tree/layout) branch.
  ![](https://user-images.githubusercontent.com/15718706/46617396-ad182980-caea-11e8-8596-f87811a625ca.png)



  ## <ea-toolbar>

  \`<ea-toolbar>\` has two elements as children labeled \`ea-toolbar-header\` and \`ea-toolbar-buttons\`.

  ![](https://user-images.githubusercontent.com/15718706/46386157-d7528d00-c68d-11e8-96ca-1184187d8edf.png)


  ### Attributes

  The following attributes will need to cause specific behavior.

  |  fixed   | the toolbar will stay at the top of the page when the user is scrolling   |
  |---|---|
  |  reveals   |  A revealing ea-toolbar scrolls back on-screen (reveals itself) as soon as you start scrolling up,
   no matter how far down the page you are.   |

  The \`ea-toolbar-header\` is contains a \`button\` which can toggle different states, for example \`open || close\`
    and a container for user content.

  ![](https://user-images.githubusercontent.com/15718706/46436787-cb1b0e00-c727-11e8-8eca-477976449eef.png)

  ## ea-drawer
  The \`ea-drawer\` has a \`ea-drawer-header\` and an \`ea-card-footer\` that can be filled with any type of content.
   The drawer will have states like \`open\` or \`closed\` which will need to be triggered from the \`ea-toolbar-header\`

  ### Attributes

  |  maximized   | this would set the drawer to width value that shows the drawer open  |
  |---|---|
  |  minimized   |  this would set the panel to its closed state   |

  ![](https://user-images.githubusercontent.com/15718706/46386203-184aa180-c68e-11e8-85ce-838102a05414.png)

  ## ea-main
  This is where main content of the layout is. It contains an \`<ea-body>\` and \`<ea-footer>\`
  `
  constructor() {}

  ngOnInit() {}
}
