import { Component, Match, Switch } from 'solid-js'
import { FaSolidPlay, FaSolidPause, FaSolidUndoAlt } from 'solid-icons/fa'
import { getTimerText } from 'core'
import { Stopwatch } from '../../stopwatch'
import { getStyle } from './style'

const _: Component<{ stopwatch: Stopwatch }> = ({
  stopwatch: { elapsedTime, resetTimer, toggleTimer, isRunning }
}) => {
  const { button, root, paragraph } = getStyle()
  return (
    <div style={root()}>
      <p style={paragraph()}>{getTimerText(elapsedTime())}</p>
      <div style={button()} onClick={toggleTimer}>
        <Switch>
          <Match when={isRunning()}>
            <FaSolidPause size={10} />
          </Match>
          <Match when={!isRunning()}>
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
