import type { Component } from 'solid-js'
import { colorModeValue, colors } from '../theme'
import Board from './board'
import Controls from './controls'
import { handleClickAway, onMouseDown, onMouseUp } from './model'
import { style } from './style'

const App: Component = () => {
  const background = colorModeValue(colors.gray[200], colors.gray[900])
  handleClickAway()

  return (
    <div
      style={style(background)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <Controls />
      <Board />
    </div>
  )
}

export default App
