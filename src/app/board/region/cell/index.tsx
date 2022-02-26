import { createMemo, Component, Show, Accessor } from 'solid-js'
import { state } from '../../../../store'
import { Cell } from '../../../../store/types'
import { isNonZero } from '../../../../fns'
import { style, getColors } from './style'
import { onMouseDown, onMouseEnter } from './model'

const _: Component<{ i: number }> = ({ i }) => {
  const colors = getColors()
  const cell = createMemo(() => state.board[i]) as Accessor<Cell>
  const shouldDisplay = createMemo(() => isNonZero(cell().value))

  return (
    <div
      style={style(cell, colors)}
      onMouseDown={onMouseDown(cell)}
      onMouseEnter={onMouseEnter(cell)}
    >
      <Show when={shouldDisplay()}>
        <p>{cell().value}</p>
      </Show>
    </div>
  )
}

export default _
