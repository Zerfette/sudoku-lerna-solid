import {
  Accessor,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  Signal
} from 'solid-js'
import { getMonoid as getArrayMonoid } from 'fp-ts/Array'
import { constant, pipe } from 'fp-ts/function'
import { IO } from 'fp-ts/IO'
import { concatAll } from 'fp-ts/Monoid'
import { MonoidSum } from 'fp-ts/number'
import {
  fold,
  getMonoid as getOptionMonoid,
  none,
  Option,
  some
} from 'fp-ts/Option'

const arrayOptionMonoid = pipe(getArrayMonoid<number>(), getOptionMonoid)

const useTimer = () => {
  const [isRunning, setIsRunning] = createSignal(false)
  const [elapsedTime, setElapsedTime] = createSignal(0)
  let interval: number

  createEffect(() => {
    if (isRunning()) {
      interval = setInterval(
        () => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.1),
        100
      )
    }
  })

  onCleanup(() => clearInterval(interval))

  return {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime
  }
}

type Laps = Option<number[]>

export type Stopwatch = {
  elapsedTime: Accessor<number>
  laps: Accessor<Laps>
  addLap: IO<void>
  resetTimer: IO<void>
  startTimer: IO<void>
  stopTimer: IO<void>
  isRunning: Accessor<boolean>
}

export const getStopwatch: IO<Stopwatch> = () => {
  const [laps, setLaps]: Signal<Option<number[]>> = createSignal(none)
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer()

  const handleReset = () => {
    setIsRunning(false)
    setElapsedTime(0)
    setLaps(() => none)
  }

  const handleAddLap = () => {
    const prevTotal = fold(constant(0), concatAll(MonoidSum))(laps())
    const currentLap = fold(
      constant(elapsedTime()),
      constant(elapsedTime() - prevTotal)
    )(laps())

    isRunning() &&
      setLaps(() => arrayOptionMonoid.concat(laps(), some([currentLap])))
  }

  return {
    elapsedTime: createMemo(() => +elapsedTime().toFixed(1)),
    laps,
    addLap: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTimer: () => setIsRunning(true),
    stopTimer: () => setIsRunning(false),
    isRunning
  }
}