import { Accessor } from 'solid-js'

type Style = (background: Accessor<string>) => Record<string, string>
export const style: Style = background => ({
  'background-color': background(),
  'min-height': '100vh',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'user-select': 'none'
})
