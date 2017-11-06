import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteComponent } from './components/autocomplete'
import { MenuComponent, MenuItemComponent } from './components/menu'
import { MarkdownComponent } from './components/markdown'
import { PanelComponent } from './components/panel'
export * from './components/autocomplete'
export * from './components/menu'
export * from './components/markdown'
export * from './components/panel'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutocompleteComponent,
    MenuComponent,
    MenuItemComponent,
    MarkdownComponent,
    PanelComponent
  ],
  exports: [
    AutocompleteComponent,
    MenuComponent,
    MenuItemComponent,
    MarkdownComponent,
    PanelComponent
  ]
})
export class EangModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EangModule,
      providers: []
    };
  }
}
