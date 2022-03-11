import { Accessor, createMemo, JSX } from 'solid-js'
import { colors, fontSizes, lineHeights, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'

type GetStyle = () => Record<string, Accessor<JSX.CSSProperties>>
export const getStyle: GetStyle = () => {
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  return {
    root: createMemo(() => ({ display: 'flex', 'align-items': 'center' })),
    paragraph: createMemo(() => ({
      'line-height': lineHeights.none,
      'font-size': fontSizes['4xl'],
      color: color(),
      margin: '0',
      'margin-left': space['0.5'],
      'margin-bottom': space['1']
    })),
    button: createMemo(() => ({
      cursor: 'pointer',
      'border-radius': radii.md,
      width: space['7'],
      height: space['7'],
      color: color(),
      'background-color': background(),
      'margin-left': space['2'],
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }))
  }
}
