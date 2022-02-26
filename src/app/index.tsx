import type { Component } from 'solid-js'
import Board from './board'
import Controls from './controls'
import { $root } from './style'

const App: Component = () => {
  return (
    <div style={$root()}>
      <Controls />
      <Board />
    </div>
  )
}

export default App
