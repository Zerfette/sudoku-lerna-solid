import { createMemo } from 'solid-js'
import { filter, isEmpty } from 'fp-ts/Array'
import { Eq as bEq } from 'fp-ts/boolean'
import { pipe } from 'fp-ts/function'

import { none, Option, some } from 'fp-ts/Option'

import { selectedLens } from '../optics'
import { state } from '..'
import { Board, Cell } from '../types'
import { lensEq } from '../../util/fns'

type GetSelectedOption = (board: Board) => Option<Cell[]>
export const getSelectedOption: GetSelectedOption = board =>
  pipe(board, filter(lensEq(selectedLens, true)(bEq)), isEmpty)
    ? none
    : pipe(board, filter(lensEq(selectedLens, true)(bEq)), some)

export const selection = createMemo(() => getSelectedOption(<Board>state.board))
