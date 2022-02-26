import type { Component } from 'solid-js'
import { toggleColorMode } from '../theme'
import Board from './board'
import { $root } from './style'

const App: Component = () => {

  return (
    <div style={$root()}>
      <button onClick={toggleColorMode}>toggle color mode</button>
      <Board />
    </div>
  )
}

export default App
