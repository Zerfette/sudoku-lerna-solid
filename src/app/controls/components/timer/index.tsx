import { Component, Match, Switch } from 'solid-js'
import { FaSolidPlay, FaSolidPause, FaSolidUndoAlt } from 'solid-icons/fa'
import { getTimerText } from 'core/stopwatch'
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
            <FaSolidPause size={12} />
          </Match>
          <Match when={!isRunning()}>
            <FaSolidPlay size={12} />
          </Match>
        </Switch>
      </div>
      <div style={button()} onClick={resetTimer}>
        <FaSolidUndoAlt size={12} />
      </div>
    </div>
  )
}

export default _
