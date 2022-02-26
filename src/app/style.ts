import { colorModeValue, colors } from '../theme'

const background = colorModeValue(colors.gray[200], colors.gray[900])

export const $root = (): Record<string, string> => ({
  'background-color': background(),
  'min-height': '100vh',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'font-size': 'calc(10px + 1vmin)',
  'user-select': 'none'
})
