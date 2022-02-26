import { Component, For } from 'solid-js'
import { Board } from '../../../store/types'
import Cell from './cell'
import { $region } from './style'

const _: Component<{ region: Board }> = ({ region }) => {
  return (
    <div style={$region}>
      <For each={region}>{cell => <Cell cell={cell} />}</For>
    </div>
  )
}

export default _
