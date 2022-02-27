import { Accessor } from 'solid-js'
import { fontSizes } from '../../../../theme'

type GetStyle = (
  color: Accessor<string>
) => Record<string, Record<string, string>>

export const getStyle: GetStyle = color => {
  return {
    root: { display: 'flex', 'align-items': 'center' },
    paragraph: {
      'font-size': fontSizes['4xl'],
      color: color(),
      margin: '0'
    }
  }
}
