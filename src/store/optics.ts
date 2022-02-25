import { Lens } from 'monocle-ts'
import { Board, Cell, Smalls, State, Toggles } from '~/store/types'

export const boardLens: Lens<State, Board> = Lens.fromProp<State>()('board')

export const indLens: Lens<Cell, number> = Lens.fromProp<Cell>()('ind')
export const valueLens: Lens<Cell, number> = Lens.fromProp<Cell>()('value')
export const rowLens: Lens<Cell, number> = Lens.fromProp<Cell>()('row')
export const colLens: Lens<Cell, number> = Lens.fromProp<Cell>()('col')
export const regLens: Lens<Cell, number> = Lens.fromProp<Cell>()('reg')
export const selectedLens: Lens<Cell, boolean> = Lens.fromProp<Cell>()(
  'selected'
)
export const highlightedLens: Lens<Cell, boolean> = Lens.fromProp<Cell>()(
  'highlighted'
)
export const lockedLens: Lens<Cell, boolean> = Lens.fromProp<Cell>()('locked')
export const cornerLens: Lens<Cell, Smalls> = Lens.fromProp<Cell>()('corner')
export const middleLens: Lens<Cell, Smalls> = Lens.fromProp<Cell>()('middle')

export const numberSelectedLens: Lens<State, number> = Lens.fromProp<State>()(
  'numberSelected'
)

export const togglesLens: Lens<State, Toggles> = Lens.fromProp<State>()(
  'toggles'
)

export const autoSolveLens: Lens<Toggles, boolean> = Lens.fromProp<Toggles>()(
  'autoSolve'
)

export const mouseDownLens: Lens<Toggles, boolean> = Lens.fromProp<Toggles>()(
  'mouseDown'
)
