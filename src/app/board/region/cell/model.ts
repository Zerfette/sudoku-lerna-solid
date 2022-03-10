import { Accessor } from 'solid-js'
import { numberSelect, selectCell } from 'core/actions'
import { Cell } from 'core/types'
import { pipe } from 'fp-ts/function'
import { state, dispatch } from '../../../../store'

export const onMouseEnter = (cell: Accessor<Cell>) => (): void => {
  const { ind, locked } = cell()
  if (state.toggles.mouseDown && !locked)
    pipe({ ind, shouldClear: false }, selectCell, dispatch)
}

export const onMouseDown =
  (cell: Accessor<Cell>) =>
  ({ ctrlKey }: globalThis.MouseEvent): void => {
    const { ind, locked, value } = cell()
    locked
      ? pipe({ value }, numberSelect, dispatch)
      : pipe({ ind, shouldClear: !ctrlKey }, selectCell, dispatch)
  }
