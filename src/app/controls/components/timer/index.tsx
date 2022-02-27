import { Component } from 'solid-js'
import { FaSolidPlay, FaSolidPause, FaSolidUndoAlt } from 'solid-icons/fa'
import { colorModeValue, colors, fontSizes } from '../../../../theme'
import { Stopwatch } from '../../stopwatch'
import { getModel } from './model'
import { getStyle } from './style'

const _: Component<{ stopwatch: Stopwatch }> = ({ stopwatch }) => {
  const color = colorModeValue(colors.black, colors.white)
  const { root, paragraph } = getStyle(color)
  const { text, resetTimer, toggleTimer } = getModel(stopwatch)
  return (
    <div style={root}>
      <p style={paragraph}>{text()}</p>
    </div>
  )
}

export default _
