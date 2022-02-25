import { Eq as bEq } from 'fp-ts/boolean'
import { lensEq, mapWhen } from '../../util/fns'
import { valueLens, selectedLens } from '../optics'
import { Board, Mutation } from '../types'

type UpdateBig = Mutation<Board, { value: number }>
export const updateBig: UpdateBig = (board, { value }) =>
  mapWhen(lensEq(selectedLens, true)(bEq), valueLens.set(value))(board)
