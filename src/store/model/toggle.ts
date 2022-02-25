import { Lens } from 'monocle-ts'
import { Mutation, Toggles } from '../types'

export const toggle: Mutation<Toggles, { lens: Lens<Toggles, boolean> }> = (
  toggles,
  { lens }
) => lens.set(!lens.get(toggles))(toggles)
