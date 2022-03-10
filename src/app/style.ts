import { Accessor, JSX } from 'solid-js'

type Style = (background: Accessor<string>) => JSX.CSSProperties
export const style: Style = background => ({
  'background-color': background(),
  'min-height': '100vh',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'user-select': 'none'
})
