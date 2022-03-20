import { Show } from 'solid-js'
import { space } from 'theme'
import {
  AutoSolve,
  ColorModeButton,
  Confetti,
  Edit,
  Help,
  StartOver,
  Timer
} from './components'
import { size } from '../board/style'
import { useModel } from './model'

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
  const { solved, stopwatch } = useModel()
  return (
    <div style={root}>
      <Confetti when={solved} />
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
