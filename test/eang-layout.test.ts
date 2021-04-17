import { html, fixture, expect } from '@open-wc/testing'

import { LayoutComponent } from '../src/Layout.js'
import '../layout.js'

describe('EangLayout', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<LayoutComponent>(html`<eang-layout></eang-layout>`)

    expect(el.title).to.equal('Hey there')
    await expect(el).shadowDom.to.be.accessible()
  })
})
