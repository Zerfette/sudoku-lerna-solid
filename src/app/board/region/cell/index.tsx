import { createMemo, Component, Show } from 'solid-js'
import { state } from '../../../../store'
import { Cell } from '../../../../store/types'
import { style, getColors } from './style'
import { onMouseDown, onMouseEnter } from './model'
import { isNonZero } from '../../../../fns'

const _: Component<{ i: number }> = ({ i }) => {
  const shouldDisplay = createMemo(() => isNonZero(state.board[i].value))
  const colors = getColors()

  return (
    <div
      style={style(i, colors)}
      onMouseDown={onMouseDown(i)}
      onMouseEnter={onMouseEnter(i)}
    >
      <Show when={shouldDisplay()}>
        <p>{state.board[i].value}</p>
      </Show>
    </div>
  )
}

export default _
