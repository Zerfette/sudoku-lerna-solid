import { FaSolidQuestion } from 'solid-icons/fa'
import { colorModeValue, colors } from '../../../theme'
import { style } from './style'

const _ = () => {
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  const onClick = () => {}
  return (
    <div style={style(background, color)} onClick={onClick}>
      <FaSolidQuestion size={20} />
    </div>
  )
}

export default _
