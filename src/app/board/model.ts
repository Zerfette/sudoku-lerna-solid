import { filter, map } from 'fp-ts/Array'
import { range } from 'fp-ts/NonEmptyArray'
import { Eq as nEq } from 'fp-ts/number'
import { dispatch, state } from '../../store'
import { setToggle } from '../../store/actions'
import { mouseOutsideLens, regLens } from '../../store/optics'
import { Board } from '../../store/types'
import { lensEq } from '../../fns'

const getRegion = (i: number) =>
  filter(lensEq(regLens, i)(nEq))(<Board>state.board)

export const regions = map(getRegion)(range(0, 8))

export const onMouseOver = () =>
  dispatch(setToggle({ lens: mouseOutsideLens, value: false }))

export const onMouseOut = () =>
  dispatch(setToggle({ lens: mouseOutsideLens, value: true }))
