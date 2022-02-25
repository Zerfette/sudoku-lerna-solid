import { Lens } from 'monocle-ts'
import { Mutation, Toggles } from '../types'

export const setToggle: Mutation<
  Toggles,
  {
    lens: Lens<Toggles, boolean>
    value: boolean
  }
> = (toggles, { lens, value }) => lens.set(value)(toggles)
