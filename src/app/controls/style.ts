import { Accessor } from 'solid-js'
import { radii, space } from '../../theme'

export const style = (background: Accessor<string>) => ({
  'background-color': background(),
  height: space[5],
  width: space[5],
  'border-radius': radii.md,
  margin: space[2],
  padding: space[2.5],
  cursor: 'pointer'
})
