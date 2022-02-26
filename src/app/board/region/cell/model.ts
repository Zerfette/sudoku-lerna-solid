import { pipe } from 'fp-ts/function'
import { state, dispatch } from '../../../../store'
import { numberSelect, selectCell } from '../../../../store/actions'

export const onMouseEnter = (ind: number) => (): void => {
  const { locked } = state.board[ind]
  if (state.toggles.mouseDown && !locked)
    pipe({ ind, shouldClear: false }, selectCell, dispatch)
}

export const onMouseDown =
  (ind: number) =>
  ({ ctrlKey }: globalThis.MouseEvent): void => {
    const { locked, value } = state.board[ind]
    locked
      ? pipe({ value }, numberSelect, dispatch)
      : pipe({ ind, shouldClear: !ctrlKey }, selectCell, dispatch)
  }
