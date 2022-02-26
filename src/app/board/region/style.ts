import{ cellSize } from './cell/style'

export const margin = 5
export const regionSize = 3 * cellSize + 6 * margin

export const $region: Record<string, string> = {
  width: `${regionSize}px`,
  height: `${regionSize}px`,
  margin: `${margin}px`,
  float: 'left'
}