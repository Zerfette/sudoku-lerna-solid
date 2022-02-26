import { createEffect } from 'solid-js'
import { filter, head, map } from 'fp-ts/Array'
import {
  constant,
  constFalse,
  constVoid as onNone,
  flow,
  pipe
} from 'fp-ts/function'
import { Eq as nEq } from 'fp-ts/number'
import { fold, getOrElse } from 'fp-ts/Option'
import { Predicate } from 'fp-ts/Predicate'
import { Lens } from 'monocle-ts'
import { dispatch, state } from '../store'
import { rowLens, colLens, regLens } from '../store/optics'
import { autoSolve } from '../store/actions'
import { Board, Cell, Selection } from '../store/types'
import { lengthIs, lensEq } from '../fns'

export const useAutoSolve = (): void => {
  type DispatchAutoSolve = (cell: Cell) => void
  const dispatchAutoSolve: DispatchAutoSolve = ({ ind }) =>
    pipe({ ind, value: state.numberSelected }, autoSolve, dispatch)

  type IsSingleton = (lens: Lens<Cell, number>, i: number) => boolean
  const isSingleton: IsSingleton = (lens, i) => {
    const onTrue = flow(filter(lensEq(lens, i)(nEq)), lengthIs(1))
    return fold(constFalse, onTrue)(<Selection>state.selection)
  }

  const canSolve: Predicate<Cell> = ({ row, col, reg }) =>
    isSingleton(rowLens, row) ||
    isSingleton(colLens, col) ||
    isSingleton(regLens, reg)

  //When number is selected check if any selected can autoSolve
  createEffect(() => {
    if (!!state.numberSelected && state.toggles.autoSolve) {
      type OnSome = (selection: Board) => void
      const onSome: OnSome = flow(filter(canSolve), map(dispatchAutoSolve))
      fold(onNone, onSome)(<Selection>state.selection)
    }
  })

  //When there is only one selected try to autoSolve
  createEffect(() => {
    if (state.toggles.autoSolve) {
      const singlePossible = lengthIs(1)(<number[]>state.availables.cell)
      const onSome = (selection: Board) => {
        const [{ ind }] = selection
        const value = getOrElse(constant(0))(
          head(<number[]>state.availables.cell)
        )

        dispatch(autoSolve({ ind, value }))
      }
      if (singlePossible) fold(onNone, onSome)(<Selection>state.selection)
    }
  })
}
