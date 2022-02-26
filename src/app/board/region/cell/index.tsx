import { createMemo, Component, Show } from 'solid-js'
import { state } from '../../../../store'
import { Cell } from '../../../../store/types'
import { style, getColors } from './style'
import { onMouseDown, onMouseEnter } from './model'
import { isNonZero } from '../../../../fns'

const _: Component<{ cell: Cell }> = ({ cell: { ind } }) => {
  const iSaySo = createMemo(() => isNonZero(state.board[ind].value))
  const colors = getColors()

  return (
    <div
      style={style(ind, colors)}
      onMouseDown={onMouseDown(ind)}
      onMouseEnter={onMouseEnter(ind)}
    >
      <Show when={iSaySo()}>
        <p>{state.board[ind].value}</p>
      </Show>
    </div>
  )
}

export default _
