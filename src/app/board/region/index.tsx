import { Component, For } from 'solid-js'
import Cell from './cell'
import { style } from './style'

const _: Component<{ region: number[] }> = ({region}) => {
  return (
    <div style={style}>
      <For each={region}>{n => <Cell i={n} />}</For>
    </div>
  )
}

export default _
