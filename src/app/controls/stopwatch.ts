import { Accessor, createMemo, createSignal, onCleanup, Signal } from 'solid-js'
import { arrayOptionMonoid, getPrevTotal, Laps } from 'core/stopwatch'
import { fold as boolFold } from 'fp-ts/boolean'
import { IO } from 'fp-ts/IO'
import { fold as optFold, none, some } from 'fp-ts/Option'

const useTimer = () => {
  const [isRunning, setIsRunning] = createSignal(false)
  const [elapsedTime, setElapsedTime] = createSignal(0)
  const increment = () => setElapsedTime(prev => prev + 0.1)
  let interval: NodeJS.Timer

  createMemo(() => {
    const onFalse = () => clearInterval(interval)
    const onTrue = () => (interval = setInterval(increment, 100))
    boolFold(onFalse, onTrue)(isRunning())
  })

  onCleanup(() => clearInterval(interval))

  return {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime
  }
}

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

export const useStopwatch: IO<Stopwatch> = () => {
  const [laps, setLaps]: Signal<Laps> = createSignal(none)
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer()

  const resetTimer = () => {
    setIsRunning(false)
    setElapsedTime(0)
    setLaps(() => none)
  }

  const addLap = () => {
    const onNone = () => elapsedTime()
    const onSome = () => elapsedTime() - getPrevTotal(laps())
    const currentLap = optFold(onNone, onSome)(laps())

    isRunning() &&
      setLaps(() => arrayOptionMonoid.concat(laps(), some([currentLap])))
  }

  const startTimer = () => setIsRunning(true)
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
