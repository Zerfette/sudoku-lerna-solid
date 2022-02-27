import { Accessor } from 'solid-js'
import { radii, space } from '../../../theme'

export const style = (background: Accessor<string>, color: Accessor<string>) => ({
  'background-color': background(),
  height: space[5],
  width: space[5],
  'border-radius': radii.md,
  margin: space[1.5],
  padding: space[2.5],
  cursor: 'pointer',
  color: color()
})
