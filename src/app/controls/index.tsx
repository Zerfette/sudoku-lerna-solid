import { space } from 'theme'
import {
  AutoSolve,
  ColorModeButton,
  Edit,
  Help,
  StartOver,
  Timer
} from './components'
import { size } from '../board/style'
import { getStopwatch } from './stopwatch'

const root: Record<string, string> = {
  display: 'flex',
  width: size,
  'justify-content': 'space-between'
}

const buttonRow: Record<string, string> = {
  margin: space[1],
  display: 'flex'
}

const _ = () => {
  const stopwatch = getStopwatch()
  return (
    <div style={root}>
      <Timer stopwatch={stopwatch} />
      <div style={buttonRow}>
        <StartOver />
        <Edit />
        <AutoSolve />
        <ColorModeButton />
        <Help />
      </div>
    </div>
  )
}

export default _
