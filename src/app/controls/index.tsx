import AutoSolve from './autoSolve'
import ColorModeButton from './colorMode'
import Edit from './edit'
import Help from './help'
import StartOver from './startOver'
import { space } from '../../theme'

const style: Record<string, string> = {
  margin: space[1],
  display: 'flex',
  'justify-content': 'flex-end'
}

const _ = () => (
  <div style={style}>
    <StartOver />
    <Edit />
    <AutoSolve />
    <ColorModeButton />
    <Help />
  </div>
)

export default _
