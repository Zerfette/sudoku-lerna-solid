import { Accessor, createMemo, JSX } from 'solid-js'
import { colors, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'

export const useStyle = (): Accessor<JSX.CSSProperties> => {
  const color = colorModeValue(colors.black, colors.white)
  return createMemo(() => ({
    color: color(),
    'border-radius': radii.sm,
    height: space['16'],
    'line-height': 1,
    'text-align': 'center',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  }))
}
