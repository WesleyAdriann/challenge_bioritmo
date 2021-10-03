import { IListItem } from './index'

export type IContainer = Omit<
  IListItem,
  'testID' | 'text' | 'withRadio' | 'rightText' | 'textProps' | 'rightProps'
> & {
  isClickable: boolean
}
