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
