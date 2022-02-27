import { Component, Match, Switch } from 'solid-js'
import { FaSolidPlay, FaSolidPause, FaSolidUndoAlt } from 'solid-icons/fa'
import { colorModeValue, colors } from '../../../../theme'
import { Stopwatch } from '../../stopwatch'
import { getModel } from './model'
import { getStyle } from './style'

const _: Component<{ stopwatch: Stopwatch }> = ({ stopwatch }) => {
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  const { button, root, paragraph } = getStyle(color, background)
  const { text, resetTimer, toggleTimer } = getModel(stopwatch)
  return (
    <div style={root()}>
      <p style={paragraph()}>{text()}</p>
      <div style={button()} onClick={toggleTimer}>
        <Switch>
          <Match when={stopwatch.isRunning()}>
            <FaSolidPause size={10} />
          </Match>
          <Match when={!stopwatch.isRunning()}>
            <FaSolidPlay size={10} />
          </Match>
        </Switch>
      </div>
      <div style={button()} onClick={resetTimer}>
        <FaSolidUndoAlt size={10} />
      </div>
    </div>
  )
}

export default _
