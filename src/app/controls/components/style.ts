import { Accessor, JSX } from 'solid-js'
import { radii, space } from 'theme'

type style = (
  background: Accessor<string>,
  color: Accessor<string>
) => JSX.CSSProperties
export const style: style = (background, color) => ({
  'background-color': background(),
  height: space[10],
  width: space[10],
  'border-radius': radii.md,
  margin: space[1.5],
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  cursor: 'pointer',
  color: color()
})
