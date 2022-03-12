import type { Component } from 'solid-js'
import { colors } from 'theme'
import { colorModeValue } from '~/colorMode'
import { useAutoSolve } from './autoSolve'
import Availables from './availables'
import Board from './board'
import Controls from './controls'
import { handleKeyDown, onMouseDown, onMouseUp } from './model'
import { style } from './style'

const App: Component = () => {
  const background = colorModeValue(colors.gray[200], colors.gray[900])
  handleKeyDown()
  useAutoSolve()

  return (
    <div
      style={style(background)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <Controls />
      <Board />
      <Availables />
    </div>
  )
}

export default App
