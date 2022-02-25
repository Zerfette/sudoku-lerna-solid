import { map } from 'fp-ts/Array'
import { Endomorphism, flow } from 'fp-ts/function'
import { selectedLens, highlightedLens } from '../optics'
import { Board } from '../types'

export const clearSelection: Endomorphism<Board> = map(
  flow(selectedLens.set(false), highlightedLens.set(false))
)
