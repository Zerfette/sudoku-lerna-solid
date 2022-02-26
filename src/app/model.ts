import { onCleanup, onMount } from 'solid-js'
import { elem } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import { Eq as nEq } from 'fp-ts/number'
import { isSome } from 'fp-ts/Option'
import { Predicate } from 'fp-ts/Predicate'
import { range } from 'fp-ts/NonEmptyArray'
import { state, dispatch } from '../store'
import { cornerLens, middleLens, mouseDownLens } from '../store/optics'
import {
  clearSelection,
  numberSelect,
  selectAll,
  setToggle,
  updateBig,
  updateSmall
} from '../store/actions'

export const onMouseDown = (): void =>
  pipe({ lens: mouseDownLens, value: true }, setToggle, dispatch)

export const onMouseUp = (): void =>
  pipe({ lens: mouseDownLens, value: false }, setToggle, dispatch)

export const handleClickAway = (): void => {
  const callback = () => {
    if (state.toggles.mouseOutside && isSome(state.selection))
      dispatch(clearSelection)
  }

  onMount(() => document.addEventListener('mousedown', callback))

  onCleanup(() => document.removeEventListener('mousedown', callback))
}

const isValue: Predicate<string> = x => elem(nEq)(+x)(range(0, 9))

export const handleKeyDown = (): void => {
  const callback = (ev: KeyboardEvent): void => {
    console.log('keydown')
    const { key, altKey, ctrlKey } = ev
    ev.stopPropagation()
    if (key !== 'F12') ev.preventDefault()
    if (isValue(key)) {
      const value = +key
      if (isSome(state.selection)) {
        if (!altKey && !ctrlKey) pipe({ value }, updateBig, dispatch)
        if (ctrlKey) pipe({ lens: cornerLens, value }, updateSmall, dispatch)
        if (altKey) pipe({ lens: middleLens, value }, updateSmall, dispatch)
      } else {
        pipe({ value }, numberSelect, dispatch)
      }
    } else {
      if (key === 'Enter') pipe(clearSelection, dispatch)
      if (key === 'Delete' || key === 'Backspace')
        pipe({ value: 0 }, updateBig, dispatch)
      if (ctrlKey && key === 'a') pipe(selectAll, dispatch)
    }
  }

  onMount(() => document.addEventListener('keydown', callback))

  onCleanup(() => document.removeEventListener('keydown', callback))
}
