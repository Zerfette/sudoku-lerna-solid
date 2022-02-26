import { margin, regionSize } from './region/style'

const boardSize = 3 * regionSize + 6 * margin

export const $board: Record<string, string> = {
  width: `${boardSize}px`,
  height: `${boardSize}px`
}
