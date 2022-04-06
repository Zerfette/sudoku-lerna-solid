/* eslint-disable react-hooks/exhaustive-deps */
import { Accessor, createMemo, createSignal } from 'solid-js'
import { every, filter, isEmpty, map } from 'fp-ts/Array'
import { Eq as bEq, fold } from 'fp-ts/boolean'
import { pipe } from 'fp-ts/function'
import { IO } from 'fp-ts/IO'
import { Eq as nEq } from 'fp-ts/number'
import { not } from 'fp-ts/Predicate'
import { noConflicts } from 'core'
import { valueLens } from 'core/optics'
import { Board } from 'core/types'
import { equals } from 'fns'
import { state } from '~/store'
import { Stopwatch, useStopwatch } from './stopwatch'

type UseModel = IO<{
  solved: Accessor<boolean>
  stopwatch: Stopwatch
}>

export const useModel: UseModel = () => {
  const [solved, setSolved] = createSignal(false)
  const stopwatch = useStopwatch()

  createMemo(() => {
    const done = pipe(
      <Board>state.board,
      map(valueLens.get),
      every(not(equals(nEq)(0)))
    )
    if (done) {
      pipe(
        <Board>state.board,
        map(cell => noConflicts(<Board>state.board, cell, cell.value)),
        filter(equals(bEq)(false)),
        isEmpty,
        fold(
          () => {
            stopwatch.isRunning() && stopwatch.stopTimer()
          },
          () => {
            setSolved(true)
            stopwatch.isRunning() && stopwatch.stopTimer()
          }
        )
      )
    }
  })

  return {
    solved,
    stopwatch
  }
}
