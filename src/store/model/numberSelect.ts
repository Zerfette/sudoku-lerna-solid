import { map } from 'fp-ts/Array'
import { flow } from 'fp-ts/function'
import { Eq as nEq } from 'fp-ts/number'
import { when, isValidPlacement, lensEq } from '../../util/fns'
import { Board, Mutation } from '../types'
import { valueLens, selectedLens, highlightedLens } from '../optics'

type NumberSelect = Mutation<Board, { value: number }>
export const numberSelect: NumberSelect = (board, { value }) =>
  map(
    flow(
      highlightedLens.set(false),
      selectedLens.set(false),
      when(lensEq(valueLens, value)(nEq), highlightedLens.set(true)),
      when(isValidPlacement(board)(value), selectedLens.set(true))
    )
  )(board)
