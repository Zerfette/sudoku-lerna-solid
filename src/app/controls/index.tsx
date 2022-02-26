import AutoSolve from './autoSolve'
import ColorModeButton from './colorMode'
import StartOver from './startOver'
import { space } from '../../theme'

const _ = () => (
  <div style={{ margin: space[1], display: 'flex' }}>
    <StartOver />
    <AutoSolve />
    <ColorModeButton />
  </div>
)

export default _
