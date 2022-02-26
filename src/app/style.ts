import { Accessor } from 'solid-js'

export const $root = (background: Accessor<string>): Record<string, string> => ({
  'background-color': background(),
  'min-height': '100vh',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'font-size': 'calc(10px + 1vmin)',
  'user-select': 'none'
})
