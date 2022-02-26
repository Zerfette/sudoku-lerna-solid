import type { Component } from 'solid-js'
import Board from './board'
import Controls from './controls'
import { style } from './style'
import { colorModeValue, colors } from '../theme'

const App: Component = () => {
  const background = colorModeValue(colors.gray[200], colors.gray[900])

  return (
    <div style={style(background)}>
      <Controls />
      <Board />
    </div>
  )
}

export default App
