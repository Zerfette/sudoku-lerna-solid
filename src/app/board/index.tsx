import { For } from 'solid-js'
import Region from './region'
import { style } from './style'
import { onMouseOut, onMouseOver, regionIndicies } from './model'

const _ = () => (
  <div style={style} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
    <For each={regionIndicies}>{region => <Region region={region} />}</For>
  </div>
)

export default _
