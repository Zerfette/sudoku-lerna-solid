import ColorModeButton from './colorMode'
import AutoSolve from './autoSolve'
import { space } from '../../theme'

const _ = () => (
  <div style={{ margin: space[1], display: 'flex' }}>
    <AutoSolve />
    <ColorModeButton />
  </div>
)

export default _
