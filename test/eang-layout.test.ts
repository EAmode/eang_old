import { html, fixture, expect } from '@open-wc/testing';

import { EangLayout } from '../src/EangLayout.js';
import '../eang-layout.js';

describe('EangLayout', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<EangLayout>(html`<eang-layout></eang-layout>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<EangLayout>(html`<eang-layout></eang-layout>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<EangLayout>(html`<eang-layout title="attribute title"></eang-layout>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<EangLayout>(html`<eang-layout></eang-layout>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
