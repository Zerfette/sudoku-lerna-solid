export const margin = 5
export const cellSize = 50

export const $cell: Record<string, string> = {
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