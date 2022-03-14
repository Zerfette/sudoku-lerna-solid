import { FaSolidSyncAlt } from 'solid-icons/fa'
import { resetBoard } from 'core/actions'
import { colors } from 'theme'
import { colorModeValue } from '~/colorMode'
import { dispatch } from '~/store'
import { style } from './style'

const _ = () => {
  const onClick = () => dispatch(resetBoard)
  const color = colorModeValue(colors.black, colors.white)
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  return (
    <div style={style(background, color)} onClick={onClick}>
      <FaSolidSyncAlt size={18} />
    </div>
  )
}

export default _
