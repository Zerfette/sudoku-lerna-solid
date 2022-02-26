import { filter, map } from 'fp-ts/Array'
import { range } from 'fp-ts/NonEmptyArray'
import { Eq as nEq } from 'fp-ts/number'
import { state } from '../../store'
import { regLens } from '../../store/optics'
import { Board } from '../../store/types'
import { lensEq } from '../../util/fns'

const getRegion = (i: number) =>
  filter(lensEq(regLens, i)(nEq))(<Board>state.board)

export const regions = map(getRegion)(range(0, 8))