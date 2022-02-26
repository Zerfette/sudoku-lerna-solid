import { onCleanup, onMount } from 'solid-js'
import { isSome } from 'fp-ts/Option'
import { state, dispatch } from '../store'
import { mouseDownLens } from '../store/optics'
import { clearSelection, setToggle } from '../store/actions'

export const handleClickAway = (): void => {
  const callback = () => {
    if (state.toggles.mouseOutside && isSome(state.selection))
      dispatch(clearSelection)
  }

  onMount(() => document.addEventListener('mousedown', callback))

  onCleanup(() => document.removeEventListener('mousedown', callback))
}

export const onMouseDown = (): void =>
  dispatch(setToggle({ lens: mouseDownLens, value: true }))

export const onMouseUp = (): void =>
  dispatch(setToggle({ lens: mouseDownLens, value: false }))
