import { Component, For } from 'solid-js'
import Region from './region'
import { $board } from './style'
import { regions } from './model'

const _: Component = () => {
  return <div style={$board}>
    <For each={regions}>
      {region => <Region region={region}/>}
    </For>
  </div>
}

export default _
