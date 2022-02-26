import type { Component } from 'solid-js'
import Board from './board'
import { $root } from './style'

const App: Component = () => {
  return (
    <div style={$root}>
      <Board />
    </div>
  )
}

export default App
