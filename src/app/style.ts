import { createSignal } from 'solid-js'
import { colorModeValue, colors } from '../theme'

const backgroundSignal = createSignal(colors.gray[900])
colorModeValue(
  { lightModeValue: colors.gray[200], darkModeValue: colors.gray[900] },
  backgroundSignal
)

export const $root = (): Record<string, string> => ({
  'background-color': backgroundSignal[0](),
  'min-height': '100vh',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'font-size': 'calc(10px + 1vmin)',
  color: 'white'
})
