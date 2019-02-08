export * from './modules/autocomplete.module'
export * from './modules/layout.module'
export * from './modules/markdown.module'
export * from './modules/panel.module'
export * from './modules/menu.module'
export * from './modules/tabs.module'
export * from './modules/themepicker.module'

export * from './services/logging.service'

export interface EangElement {
  id?: any
  name: string
  icon?: string
  iconStyle?: string
  horizontal?: boolean
  closeable?: boolean
  isHidden?: boolean
  isActive?: boolean
  isOpen?: boolean
  toggleRight?: boolean
  hasChildren?: boolean
  parent?: EangElement
  dropdown?: boolean
  children?: EangElement[]
  data?: any
}
