import { space } from '../../../../theme'

export const margin = space[1]
export const size = space[14]

export const $cell: Record<string, string> = {
  width: size,
  height: size,
  background: 'grey',
  float: 'left',
  margin: margin,
  display: 'grid',
  'justify-content': 'center',
  'align-content': 'center',
  'border-radius': '2px'
}