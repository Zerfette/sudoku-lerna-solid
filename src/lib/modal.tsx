import { Accessor, Component, createEffect } from 'solid-js'
import { IO } from 'fp-ts/IO'
import { colors, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'
type Dialog = HTMLDialogElement & {
  showModal: IO<void>
  close: IO<void>
}

type Props = { isOpen: Accessor<boolean>; onClose: IO<void> }

const _: Component<Props> = ({ children, isOpen, onClose }) => {
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  let modal = (<></>) as Dialog
  const close = () => {
    modal.close()
    onClose()
  }

  createEffect(() => (isOpen() ? modal.showModal() : close()))

  const onClick = (evt: MouseEvent) => evt.target === modal && close()

  return (
    <dialog
      ref={modal}
      style={{
        color: color(),
        background: background(),
        padding: 0,
        border: 0,
        'border-radius': radii.md
      }}
      onClick={onClick}
    >
      <div style={{ padding: space[5] }}>{children}</div>
    </dialog>
  )
}

export default _
