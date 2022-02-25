import { map } from 'fp-ts/Array'
import { flow, Endomorphism, not } from 'fp-ts/function'
import { Eq as nEq } from 'fp-ts/number'
import { when, lensEq } from '~/util/fns'
import {
  valueLens,
  selectedLens,
  lockedLens
} from '../optics'
import { Board } from '../types'

export const lockBoard: Endomorphism<Board> = map(
  flow(
    selectedLens.set(false),
    when(not(lensEq(valueLens, 0)(nEq)), lockedLens.set(true))
  )
)
