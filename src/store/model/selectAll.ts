import { Eq as bEq } from 'fp-ts/boolean'
import { Endomorphism } from 'fp-ts/Endomorphism'
import { lensEq, mapWhen } from '../../util/fns'
import { selectedLens, lockedLens } from '../optics'
import { Board } from '../types'

export const selectAll: Endomorphism<Board> = mapWhen(
  lensEq(lockedLens, false)(bEq),
  selectedLens.set(true)
)
