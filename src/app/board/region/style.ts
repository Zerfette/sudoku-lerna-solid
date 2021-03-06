import { JSX } from 'solid-js'
import { size as cellSize, margin } from './cell/style'

export const size = `calc(3 * ${cellSize} + 6 * ${margin})`

export const style: JSX.CSSProperties = {
  width: size,
  height: size,
  margin: margin,
  float: 'left'
}