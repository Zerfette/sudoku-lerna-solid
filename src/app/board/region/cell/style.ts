import {
  colorModeValue,
  colors,
  fontSizes,
  fontWeights,
  space,
} from '../../../../theme'
import { state } from '../../../../store'
import { Board, Cell } from '../../../../store/types'
import { noConflicts } from '../../../../util/fns'

export const margin = space[1]
export const size = space[14]

const { black, cyan, purple, red, white } = colors
const invalidColor = colorModeValue(red[200], red[700])
const highlightedColor = colorModeValue(cyan[200], cyan[700])
const selectedColor = colorModeValue(purple[400], purple[600])
const dflt = colorModeValue(purple[200], purple[800])
const color = colorModeValue(black, white)

export const $cell = (ind: number): Record<string, string> => {
  const cell = state.board[ind]
  const { highlighted, locked, selected, value } = cell
  const valid = noConflicts(<Board>state.board, <Cell>cell, value)

  return {
    fontSize: fontSizes['4xl'],
    color: color(),
    width: size,
    height: size,
    background: !valid
      ? invalidColor()
      : highlighted
      ? highlightedColor()
      : selected
      ? selectedColor()
      : dflt(),
    float: 'left',
    margin: margin,
    display: 'grid',
    'justify-content': 'center',
    'align-content': 'center',
    'border-radius': '2px',
    'font-weight': locked ? fontWeights.black : fontWeights.normal
  }
}
