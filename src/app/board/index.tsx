import { For } from 'solid-js'
import Region from './region'
import { style } from './style'
import { regions } from './model'

const _ = () => (
  <div style={style}>
    <For each={regions}>{region => <Region region={region} />}</For>
  </div>
)

export default _
