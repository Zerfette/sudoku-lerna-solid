import { Option } from 'fp-ts/Option'

export type Smalls = number[]

export type Cell = {
  ind: number
  value: number
  row: number
  col: number
  reg: number
  selected: boolean
  locked: boolean
  highlighted: boolean
  corner: Smalls
  middle: Smalls
}

export type Board = Cell[]

export type Puzzle = number[][]

export type Toggles = Record<string, boolean>

export type Availables = {
  cell: number[]
  row: number[]
  col: number[]
  reg: number[]
}

export type Selection = Option<Cell[]>

export type State = {
  board: Board
  toggles: Toggles
  numberSelected: number
  availables: Availables
  selection: Selection
}

export type Mutation<S, P> = (state: S, payload: P) => S
