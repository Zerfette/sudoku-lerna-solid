import { Accessor, JSX } from 'solid-js'
import { noConflicts } from 'core'
import { Board, Cell } from 'core/types'
import { colors, fontSizes, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'
import { state } from '~/store'

export const margin = space[0.5]
export const size = space[14]
const { black, cyan, purple, red, white } = colors

export const getColors = (): Record<string, Accessor<string>> => ({
  invalidColor: colorModeValue(red[200], red[700]),
  highlightedColor: colorModeValue(cyan[200], cyan[700]),
  selectedColor: colorModeValue(purple[400], purple[600]),
  dflt: colorModeValue(purple[200], purple[800]),
  lockedColor: colorModeValue(black, white),
  unlockedColor: colorModeValue(purple[600], purple[300])
})

type Style = (
  cell: Accessor<Cell>,
  colors: ReturnType<typeof getColors>
) => JSX.CSSProperties
export const style: Style = (
  cell,
  {
    invalidColor,
    highlightedColor,
    selectedColor,
    dflt,
    lockedColor,
    unlockedColor
  }
) => {
  const { highlighted, locked, selected, value }: Cell = cell()
  const valid: boolean = noConflicts(<Board>state.board, cell(), value)

  return {
    'font-size': fontSizes['4xl'],
    color: locked ? lockedColor() : unlockedColor(),
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
    'border-radius': radii.sm
    // 'font-weight': locked ? "bold" : "normal"
  }
}
