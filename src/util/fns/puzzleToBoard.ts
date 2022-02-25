import { chainWithIndex, mapWithIndex } from 'fp-ts/Array'
import { Endomorphism } from 'fp-ts/Endomorphism'
import { flow } from 'fp-ts/function'
import { Eq as nEq } from 'fp-ts/number'
import { Predicate } from 'fp-ts/Predicate'
import { indLens } from '../../store/optics'
import { Board, Cell, Puzzle } from '../../store/types'

const isNonZero: Predicate<number> = x => !nEq.equals(x, 0)

const op: Endomorphism<number> = x => Math.floor(x / 3)

type GetRegion = (r: number, c: number) => number
const getRegion: GetRegion = (r, c) => 3 * op(r) + op(c)

type ToCell = (row: number) => (col: number, value: number) => Cell
const toCell: ToCell = row => (col, value) => ({
  ind: 0,
  value,
  row,
  col,
  reg: getRegion(row, col),
  selected: false,
  highlighted: false,
  locked: isNonZero(value),
  corner: [],
  middle: []
})

type ToCells = (rowIndex: number, row: number[]) => Cell[]
const toCells: ToCells = (rowIndex, row) => mapWithIndex(toCell(rowIndex))(row)

type SetIndex = (i: number, cell: Cell) => Cell
const setIndex: SetIndex = (i, cell) => indLens.set(i)(cell)

type PuzzleToBoard = (puzzle: Puzzle) => Board
export const puzzleToBoard: PuzzleToBoard = flow(
  chainWithIndex(toCells),
  mapWithIndex(setIndex)
)
