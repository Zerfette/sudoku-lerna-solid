import { Accessor, createMemo, createSignal, onCleanup, Signal } from 'solid-js'
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
  let interval: NodeJS.Timer

  createMemo(() => {
    if (isRunning()) {
      interval = setInterval(
        () => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.1),
        100
      )
    } else {
      clearInterval(interval)
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
  toggleTimer: IO<void>
  isRunning: Accessor<boolean>
}

export const getStopwatch: IO<Stopwatch> = () => {
  const [laps, setLaps]: Signal<Option<number[]>> = createSignal(none)
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer()

  const resetTimer = () => {
    setIsRunning(false)
    setElapsedTime(0)
    setLaps(() => none)
  }

  const addLap = () => {
    const prevTotal = fold(constant(0), concatAll(MonoidSum))(laps())
    const currentLap = fold(
      constant(elapsedTime()),
      constant(elapsedTime() - prevTotal)
    )(laps())

    isRunning() &&
      setLaps(() => arrayOptionMonoid.concat(laps(), some([currentLap])))
  }

  const startTimer =  () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false)
  const toggleTimer = () => (isRunning() ? stopTimer() : startTimer())
  

  return {
    elapsedTime: createMemo(() => +elapsedTime().toFixed(1)),
    laps,
    addLap,
    resetTimer,
    startTimer,
    stopTimer,
    toggleTimer,
    isRunning
  }
}
