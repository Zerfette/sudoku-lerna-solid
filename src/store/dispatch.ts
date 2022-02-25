import { puzzleToBoard } from '../util/fns'
import { setState } from './'
import { Action, ActionType } from './actions/types'
import {
  autoSolve,
  clearSelection,
  clearBoard,
  lockBoard,
  numberSelect,
  resetBoard,
  selectAll,
  selectCell,
  setToggle,
  toggle,
  updateBig,
  updateSmall
} from './model'
import { Board, Toggles } from './types'

const dispatch = (action: Action): void => {
  switch (action.type) {
    case ActionType.AUTO_SOLVE:
      setState('board', board => autoSolve(<Board>board, action.payload))
      break
    case ActionType.SET_PUZZLE:
      setState('board', puzzleToBoard(action.payload.puzzle))
      break
    case ActionType.CLEAR_SELECTION:
      setState('numberSelected', 0)
      setState('board', board => clearSelection(<Board>board))
      break
    case ActionType.CLEAR_BOARD:
      setState('board', clearBoard)
      break
    case ActionType.LOCK_BOARD:
      setState('board', board => lockBoard(<Board>board))
      break
    case ActionType.NUMBER_SELECT:
      setState('numberSelected', action.payload.value)
      setState('board', board => numberSelect(<Board>board, action.payload))
      break
    case ActionType.RESET_BOARD:
      setState('board', board => resetBoard(<Board>board))
      break
    case ActionType.SELECT_ALL:
      setState('board', board => selectAll(<Board>board))
      break
    case ActionType.SELECT_CELL:
      setState('numberSelected', 0)
      setState('board', board => selectCell(<Board>board, action.payload))
      break
    case ActionType.UPDATE_BIG:
      setState('board', board => updateBig(<Board>board, action.payload))
      break
    case ActionType.UPDATE_SMALL:
      setState('board', board => updateSmall(<Board>board, action.payload))
      break
    case ActionType.TOGGLE:
      setState('toggles', toggles => toggle(<Toggles>toggles, action.payload))
      break
    case ActionType.SET_TOGGLE:
      setState('toggles', toggles =>
        setToggle(<Toggles>toggles, action.payload)
      )
      break
    default:
      break
  }
}

export default dispatch
