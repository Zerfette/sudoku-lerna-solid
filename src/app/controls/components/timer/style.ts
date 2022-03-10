import { Accessor, createMemo, JSX } from 'solid-js'
import { fontSizes, lineHeights, radii, space } from 'theme'

type GetStyle = (
  color: Accessor<string>,
  background: Accessor<string>
) => Record<string, Accessor<JSX.CSSProperties>>

export const getStyle: GetStyle = (color, background) =>
  ({
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
  })
