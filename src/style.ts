export const root: Record<string, string> = {
  'background-color': '#282c34',
  'min-height': '100vh',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'font-size': 'calc(10px + 1vmin)',
  color: 'white'
}

const margin = 5
const cellSize = 50
const regionSize = 3 * cellSize + 6 * margin
const boardSize = 3 * regionSize + 6 * margin

export const cell: Record<string, string> = {
  width: `${cellSize}px`,
  height: `${cellSize}px`,
  background: 'grey',
  float: 'left',
  margin: `${margin}px`,
  display: 'grid',
  'justify-content': 'center',
  'align-content': 'center',
  'border-radius': '2px'
}

export const region: Record<string, string> = {
  width: `${regionSize}px`,
  height: `${regionSize}px`,
  margin: `${margin}px`,
  float: 'left'
}

export const board: Record<string, string> = {
  width: `${boardSize}px`,
  height: `${boardSize}px`
}