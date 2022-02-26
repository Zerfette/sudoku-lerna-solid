import { createStore } from 'solid-js/store'
import { puzzleToBoard } from '../util/fns'
import { State } from './types'
import dispatch from './dispatch'

const testPuzzle = [
  [0, 3, 9, 0, 7, 0, 2, 5, 1],
  [7, 0, 0, 1, 2, 0, 0, 3, 0],
  [0, 1, 5, 0, 9, 3, 0, 0, 7],
  [0, 0, 2, 0, 0, 1, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 0, 4, 0, 0, 6, 0, 0],
  [4, 0, 0, 3, 6, 0, 1, 9, 0],
  [0, 9, 0, 0, 4, 7, 0, 0, 6],
  [3, 6, 8, 0, 1, 0, 7, 2, 0]
]

const init: State = {
  board: puzzleToBoard(testPuzzle),
  numberSelected: 0,
  toggles: { autoSolve: false, mouseDown: false, mouseOutside: false }
}

const [state, setState] = createStore(init)

export { dispatch, state, setState }