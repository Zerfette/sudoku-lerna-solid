import { onCleanup, onMount } from 'solid-js'
import { isSome } from 'fp-ts/Option'
import { state, dispatch } from '../store'
import { clearSelection } from '../store/actions'
import { selection } from '../store/selectors'

export const handleClickAway = (): void => {
  const callback = () => {
    if (state.toggles.mouseOutside && isSome(selection()))
      dispatch(clearSelection)
  }

  onMount(() => document.addEventListener('mousedown', callback))

  onCleanup(() => document.removeEventListener('mousedown', callback))
}
