import{ size as cellSize, margin } from './cell/style'

export const size = `calc(3 * ${cellSize} + 6 * ${margin})`

export const $region: Record<string, string> = {
  width: size,
  height: size,
  margin: margin,
  float: 'left'
}