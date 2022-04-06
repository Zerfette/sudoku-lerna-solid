import { FaSolidQuestion } from 'solid-icons/fa'
import { colors } from 'theme'
import { colorModeValue } from '~/colorMode'
import { style } from './style'
import Modal from '~/lib/modal'
import { useDisclosure } from '~/lib/useDisclosure'

const _ = () => {
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <div>
      <div style={style(background, color)} onClick={onOpen}>
        <FaSolidQuestion size={18} />
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>This is a test modal</Modal>
    </div>
  )
}

export default _
