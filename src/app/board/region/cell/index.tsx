import { Component, Show } from 'solid-js'
import { Cell } from '../../../../store/types'
import { $cell, getColors } from './style'
import { onMouseDown, onMouseEnter } from './model'

const _: Component<{ cell: Cell }> = ({ cell: { ind, value } }) => {
  const colors = getColors()
  return (
    <div
      style={$cell(ind, colors)}
      onMouseDown={onMouseDown(ind)}
      onMouseEnter={onMouseEnter(ind)}
    >
      <Show when={value > 0}>
        <p>{value}</p>
      </Show>
    </div>
  )
}

export default _
