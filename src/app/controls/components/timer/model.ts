import { Accessor, createMemo, onMount } from 'solid-js'
import { concat, magmaModulo, zeroPad } from 'fns'
import { intersperse, map } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import { IO } from 'fp-ts/IO'
import { MonoidProduct } from 'fp-ts/number'
import { Stopwatch } from '../../stopwatch'

type GetModel = (stopwatch: Stopwatch) => {
  text: Accessor<string[]>
  resetTimer: IO<void>
  toggleTimer: IO<void>
}
export const getModel: GetModel = ({
  elapsedTime,
  resetTimer,
  startTimer,
  stopTimer,
  isRunning
}) => {

  // onMount(() => startTimer())
  const hours = createMemo(() =>
    pipe(
      elapsedTime(),
      concat(magmaModulo)(86400),
      concat(MonoidProduct)(1 / 3600),
      Math.floor
    )
  )
  const minutes = createMemo(() =>
    pipe(
      elapsedTime(),
      concat(magmaModulo)(3600),
      concat(MonoidProduct)(1 / 60),
      Math.floor
    )
  )
  const seconds = createMemo(() =>
    pipe(elapsedTime(), concat(magmaModulo)(60), Math.floor)
  )
  return {
    text: createMemo(() =>
      pipe([hours(), minutes(), seconds()], map(zeroPad), intersperse(':'))
    ),
    resetTimer,
    toggleTimer: () => {
      isRunning() ? stopTimer() : startTimer()
    }
  }
}
